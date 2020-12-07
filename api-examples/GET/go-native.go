package main

import (
	"fmt"
	"strings"
	"net/http"
	"io/ioutil"
)

func main() {

	url := "https://api.metalabs.io/v2/licenses/0000-0000-0000-0000"
	method := "GET"

	client := &http.Client {
	}
	req, err := http.NewRequest(method, url)

	if err != nil {
		fmt.Println(err)
		return
	}
	req.Header.Add("Authorization", "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(body))
}