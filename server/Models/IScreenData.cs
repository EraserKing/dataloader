﻿// Generated by https://quicktype.io

using System.Collections.Generic;

namespace Server.Models
{
    public interface IScreenData
    {
        KeyValuePair<string, string> ToSearchResult();
        string Serialize();
    }
}