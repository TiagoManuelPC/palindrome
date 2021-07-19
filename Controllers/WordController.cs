using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace palindrome.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordController : ControllerBase
    {

        [HttpPost]
        public Boolean Post([FromBody] CustomData data)
        {
            string cleanWord = Regex.Replace(data.word, @"[^\w\d\s]", "").Replace(" ", String.Empty);
         
            char[] charArray = cleanWord.ToCharArray();
             Array.Reverse(charArray );
             string reverseWord = new string (charArray );

            if (cleanWord.ToLower() == reverseWord.ToLower())
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        

    public class CustomData
    {
        public string word { get; set; }
}
}
}
