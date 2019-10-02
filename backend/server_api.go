package main

import (
	"fmt"
	"net/http"
	"strconv"
	"github.com/globalsign/mgo"
	"github.com/gin-gonic/gin"
	"github.com/globalsign/mgo/bson"
	cors "github.com/rs/cors/wrapper/gin"
)

const (
	tech = "Gen Sec Technical Affairs"
	acad = "Gen Sec Academics Affairs"
	cult = "Gen Sec Cultural Affairs"
	host = "Gen Sec Hostel Affairs"
	sprt = "Gen Sec Sports Affairs"
	prof = "Gen Sec Professionals Affairs"
)

// Person consist of all database in field
type Person struct {
	ID            int    `bson:"_id"`
	Name          string `json:"name" bson:"name"`
	Password      string `bson:"password"`
	Threads       []int  `json:"threads" bson:"threads"`
	PinnedThreads []int  `json:"pinned_threads" bson:"pinned_threads"`
}

type Threads struct {
	ID          int      `bson:"_id"`
	Title       string   `json:"title" bson:"title"`
	Description string   `json:"description" bson:"description"`
	Comments    []string `json:"comments" bson:"comments"`
	CandidateID int      `json:"candidate_id" bson:"candidate_id"`
}

type Candidates struct {
	ID          int      `bson:"_id"`
	PersonID    int      `json:"person_id" bson:"person_id"`
	PersonName  string   `json:"person_name" bson:"person_name"`
	Post        string   `json:"post" bson:"post"`
	Manifestos  []string `json:"manifestos" bson:"manifestos"`
	Achivements []string `json:"achivements" bson:"achivements"`
	Info        string   `json:"info" bson:"info"`
	Link        string   `json:"link" bson:"link"`
}

type PinnedThreads struct {
	ID int `json:"thread_id" bson:"_id"`
}

type Comments struct {
	Comment string `json:"comment"`
}

func PostComment(db *mgo.Database) gin.HandlerFunc {
	ThreadsCollection := db.C("Threads")
	fn := func(c *gin.Context) {
		id, _ := strconv.Atoi(c.Param("id"))
		var thread Threads
		ThreadsCollection.Find(bson.M{"_id": id}).One(thread)

		comments := thread.Comments

		var comment Comments
		c.BindJSON(&comment)
		comments = append(comments, comment.Comment)
		ThreadsCollection.Update(bson.M{"_id": id}, bson.M{"$set": bson.M{"comments": comments}})
		c.JSON(http.StatusOK, gin.H{
			"message": "Done",
		})
	}

	return gin.HandlerFunc(fn)
}

func PostThreads(db *mgo.Database) gin.HandlerFunc {
	ThreadsCollection := db.C("Threads")
	fn := func(c *gin.Context) {
		num, _ := ThreadsCollection.Find(nil).Count()
		var thread Threads
		c.BindJSON(thread)
		thread.ID = num
		ThreadsCollection.Insert(thread)
		c.JSON(http.StatusOK, gin.H{
			"message": "Done",
		})
	}

	return gin.HandlerFunc(fn)
}

func PostPinnedThreads(db *mgo.Database) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		var pinnedThreads PinnedThreads
		c.BindJSON(&pinnedThreads)
		print(pinnedThreads.ID)
		PersonCollection := db.C("Persons")
		var user Person
		error := PersonCollection.Find(nil).One(&user)
		if error != nil {
			panic("sdsd")
		}
		pinned := user.PinnedThreads
		pinned = append(pinned, pinnedThreads.ID)
		PersonCollection.Update(bson.M{"_id": user.ID}, bson.M{"$set": bson.M{"pinned_threads": pinned}})
		c.JSON(http.StatusOK, gin.H{
			"message": "Done",
		})
	}

	return gin.HandlerFunc(fn)
}

func getDrumil(db *mgo.Database) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Drumil is djlskdlegend",
		})
	}

	return gin.HandlerFunc(fn)
}

//Get Request

func GetCandidateList(db *mgo.Database) gin.HandlerFunc {
	candidatesCollection := db.C("Candidates")

	var result []Candidates
	candidatesCollection.Find(nil).All(&result)

	fn := func(c *gin.Context) {
		if len(result) == 0 {
			c.JSON(http.StatusOK, gin.H{
				"message": "No data Present",
			})
		} else {
			c.JSON(http.StatusOK, result)
		}
	}
	return gin.HandlerFunc(fn)
}

func GetPostedCandidateList(db *mgo.Database) gin.HandlerFunc {
	candidatesCollection := db.C("Candidates")

	var result []Candidates

	fn := func(c *gin.Context) {
		post := c.Param("post")
		candidatesCollection.Find(bson.M{"post": post}).All(&result)
		if len(result) == 0 {
			c.JSON(http.StatusOK, gin.H{
				"message": "No data Present",
			})
		} else {
			c.JSON(http.StatusOK, result)
		}
	}

	return gin.HandlerFunc(fn)
}

func GetCandidate(db *mgo.Database) gin.HandlerFunc {
	candidatesCollection := db.C("Candidates")

	var result []Candidates

	fn := func(c *gin.Context) {
		id, err := strconv.Atoi(c.Param("id"))
		if err != nil {
			panic("Drumil is legend")
		}
		fmt.Print(id)
		candidatesCollection.Find(bson.M{"_id": id}).All(&result)
		c.JSON(http.StatusOK, result)

	}

	return gin.HandlerFunc(fn)
}

func GetForums(db *mgo.Database) gin.HandlerFunc {
	ThreadsCollection := db.C("Threads")

	var result []Threads

	fn := func(c *gin.Context) {
		id, _ := strconv.Atoi(c.Param("id"))
		ThreadsCollection.Find(bson.M{"candidate_id": id}).All(&result)
		if len(result) == 0 {
			c.JSON(http.StatusOK, gin.H{
				"message": "No data Present",
			})
		} else {
			c.JSON(http.StatusOK, result)
		}
	}

	return gin.HandlerFunc(fn)
}

func GetPinnedThreads(db *mgo.Database) gin.HandlerFunc {
	fn := func(c *gin.Context) {
		PersonCollection := db.C("Persons")
		var user Person
		err := PersonCollection.Find(nil).One(&user)
		if err != nil {
			panic(err)
		}
		ThreadsCollection := db.C("Threads")
		pinnedThreads := user.PinnedThreads
		var resultArray []Threads
		for _, v := range pinnedThreads {
			var result Threads
			ThreadsCollection.Find(bson.M{"_id": v}).One(&result)
			resultArray = append(resultArray, result)
		}

		c.JSON(http.StatusOK, resultArray)
	}

	return gin.HandlerFunc(fn)
}

func main() {
	session, err := mgo.Dial("127.0.0.1")

	if err != nil {
		panic(err)
	}
	session.SetMode(mgo.Monotonic, true)

	index := mgo.Index{
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}

	router := gin.Default()

	dbNames, err := session.DatabaseNames()

	for i, v := range dbNames {
		fmt.Printf("[%3v] - %v\n", i+1, v)
	}

	myDb := session.DB("test")

	people := myDb.C("Persons")
	threads := myDb.C("Threads")
	candidate := myDb.C("Candidates")

	threads.Insert(&Threads{ID: 0, Title: "Hello 0", Description: "Lorem ipsum sdasd", CandidateID: 0, Comments: []string{}},
		&Threads{ID: 1, Title: "Hello 1", Description: "Lorem ipsum sdasd", CandidateID: 0, Comments: []string{}},
		&Threads{ID: 2, Title: "Hello 2", Description: "Lorem ipsum sdasd", CandidateID: 0, Comments: []string{}})

	people.Insert(&Person{ID: 0, Name: "XYZ1", Password: "drumil", Threads: []int{}, PinnedThreads: []int{}},
		&Person{ID: 1, Name: "XYZ2", Password: "drumil", Threads: []int{}, PinnedThreads: []int{}},
		&Person{ID: 2, Name: "XYZ3", Password: "drumil", Threads: []int{}, PinnedThreads: []int{}})

	candidate.Insert(&Candidates{ID: 0, PersonID: 0, PersonName: "drumil", Post: host, Link: "/modi.png", Manifestos: []string{"ijdidjfsdasd"}, Achivements: []string{"asdojadsk"}, Info: "Drumil"})
	candidate.Insert(&Candidates{ID: 1, PersonID: 1, PersonName: "Lorem", Post: host, Link: "/obama.png", Manifestos: []string{"hi", "everyone", "for", "supporting", "my", "opponent"}, Achivements: []string{"kuch", "jivan", "me", "nahi", "ukhada"}, Info: "Nikal Pehli phursat me nikal"})
	candidate.Insert(&Candidates{ID: 2, PersonID: 2, PersonName: "ipsum", Post: host, Link: "/modi.png", Manifestos: []string{"You", "are", "legend"}, Achivements: []string{"because", "I", "am", "legend"}, Info: "I am legend"})

	err = people.EnsureIndex(index)
	router.Use(cors.Default())
	getAPI := router.Group("/get")
	{
		getAPI.GET("/Candidates", GetCandidateList(myDb))
		getAPI.GET("/Candidates/:post", GetPostedCandidateList(myDb))
		getAPI.GET("/Candidate/:id", GetCandidate(myDb))
		getAPI.GET("/PinnedThreads", GetPinnedThreads(myDb))
		getAPI.GET("/Forums/:id", GetForums(myDb))
		getAPI.GET("/hello", getDrumil(myDb))
	}

	postAPI := router.Group("/post")
	{
		postAPI.POST("/Forums/:id", PostComment(myDb))
		postAPI.POST("/Forums", PostThreads(myDb))
		postAPI.POST("/pinnedThreads", PostPinnedThreads(myDb))
	}


	router.Run(":3000")
}