
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        let cookienum = extraCookies;
        let child_largestCookieNum = 0;
        for(var i=0; i<cookies.length; i++){
                if(cookies[i]>child_largestCookieNum){
                        child_largestCookieNum=cookies[i];
                }
        }
        for(var i=0; i<cookies.length; i++){
                if(child_largestCookieNum>cookies[i]){
                        let need_cookie = child_largestCookieNum-cookies[i];
                        if(cookienum>=need_cookie){
                                cookienum-=need_cookie;
                        }
                        else{
                                return false;
                        }
                }
        }
        return true;
 };
