module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,88,75,150,237,56,8,219,208,29,4,243,95,203,59,189,255,109,180,132,106,16,92,21,44,98,201,14,112,243,175,242,87,245,171,254,213,252,106,127,253,253,218,126,253,126,237,191,142,95,231,175,235,215,253,235,249,245,254,230,251,141,253,230,253,198,127,19,191,201,223,212,111,250,55,243,155,253,237,247,179,125,184,28,87,224,74,92,133,171,113,13,174,253,189,239,195,101,184,30,46,199,21,184,18,87,225,106,92,131,11,243,12,243,12,243,12,243,12,243,12,243,12,115,12,115,12,115,12,115,30,230,60,204,121,152,147,240,37,238,23,238,21,254,47,204,7,175,7,86,15,156,30,24,61,240,121,96,243,192,229,129,201,3,143,7,22,15,28,30,24,60,172,255,97,253,15,107,127,88,247,195,154,29,235,117,172,213,177,78,199,26,29,235,115,172,205,177,38,183,196,213,184,246,231,88,135,63,220,123,184,247,112,207,49,199,129,115,224,28,56,7,46,112,47,112,47,112,47,112,47,112,47,113,47,113,47,113,15,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,91,226,216,16,199,118,56,182,193,193,193,193,193,193,193,23,247,176,7,14,30,142,61,112,242,128,246,1,46,1,237,3,186,7,248,4,248,4,52,15,112,10,232,28,224,20,224,20,208,57,160,113,64,223,128,182,1,94,1,94,241,112,15,188,194,17,195,113,15,220,194,113,223,17,195,17,31,252,2,220,2,124,34,113,31,92,162,48,183,48,23,199,44,112,200,2,71,44,112,192,2,199,43,112,184,2,123,17,216,139,192,94,4,246,34,192,35,192,35,192,35,176,23,1,14,129,243,147,88,123,98,31,18,107,79,172,61,177,246,196,186,19,123,145,88,123,226,124,36,214,157,88,119,98,221,137,117,231,195,189,135,123,88,119,98,221,137,253,72,172,57,177,31,137,253,72,172,55,177,31,137,53,39,246,35,177,31,137,253,72,172,63,177,31,137,253,72,112,72,236,71,98,63,18,123,144,88,123,98,237,137,125,72,236,65,98,15,18,235,79,236,67,130,67,130,67,130,67,130,67,130,195,98,205,139,245,46,206,248,98,205,139,53,47,214,188,56,219,11,189,23,235,94,104,190,88,251,226,44,173,209,143,87,9,28,22,103,106,193,99,161,255,130,203,98,15,22,124,22,231,107,193,105,31,230,97,47,22,188,22,251,177,224,182,216,143,5,191,197,158,44,56,46,246,101,161,241,98,157,139,117,46,214,183,88,223,98,125,203,245,65,227,133,198,139,243,190,124,71,63,8,13,243,104,130,6,239,239,103,252,23,171,132,105,26,206,195,226,96,232,192,242,96,56,249,113,202,35,226,113,222,187,121,11,227,12,234,68,56,17,78,132,19,225,68,56,17,78,132,19,225,68,4,17,65,68,16,17,68,4,17,65,68,16,17,68,4,17,65,68,18,145,68,36,17,73,68,18,145,68,36,17,73,68,18,145,68,20,17,69,68,17,81,68,20,17,69,68,17,81,68,20,17,69,68,19,129,35,96,134,253,129,121,52,65,83,52,152,103,164,106,100,105,36,104,228,102,164,101,100,100,36,99,228,97,164,96,92,189,113,225,198,53,91,157,161,151,15,55,62,215,248,72,107,58,154,142,166,163,233,24,58,134,142,161,99,232,24,58,152,134,47,15,95,18,190,12,124,233,151,185,215,152,120,141,89,215,152,114,141,249,214,152,108,141,153,214,152,102,141,121,214,152,104,141,89,214,152,98,97,156,38,105,232,224,174,62,178,124,100,249,200,242,145,229,35,203,71,150,143,44,31,89,62,178,124,100,249,200,242,113,83,152,175,141,9,219,152,177,141,41,219,152,179,141,73,219,152,181,141,105,219,152,183,141,137,219,152,185,141,169,219,152,187,141,201,219,152,189,141,233,219,152,191,141,9,220,152,193,141,41,220,152,195,141,73,28,219,129,229,50,37,195,24,205,163,113,154,160,73,154,162,105,26,34,120,8,153,176,97,136,32,35,231,33,100,242,134,33,130,220,156,135,144,137,28,134,8,178,116,30,66,38,117,24,34,200,215,121,8,153,224,97,136,32,115,231,33,100,178,135,33,130,26,56,15,33,19,63,12,17,80,35,168,21,76,211,48,43,3,22,84,13,198,104,152,161,153,98,169,31,12,19,245,193,152,110,169,36,12,17,77,4,83,47,53,133,33,162,137,96,26,166,186,48,68,48,35,191,38,130,121,249,13,17,204,206,111,136,96,142,126,115,197,128,136,33,130,249,250,13,17,204,218,111,137,96,238,126,40,66,93,136,2,243,104,130,166,104,208,77,212,210,177,116,44,29,75,7,118,171,27,231,20,230,209,4,13,27,144,143,14,163,195,232,48,58,140,14,163,227,209,241,232,120,116,60,58,30,29,78,135,211,225,116,56,29,78,71,208,17,116,4,29,65,71,208,145,116,36,29,73,71,210,145,116,20,29,69,71,209,81,116,20,29,108,153,154,29,83,179,97,234,235,151,216,46,53,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,55,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,153,15,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,14,9,46,9,178,38,54,139,98,179,34,54,75,98,179,38,194,208,65,130,44,135,205,90,216,44,132,205,42,216,44,129,205,250,215,44,126,80,142,255,226,69,132,225,61,188,136,48,231,64,23,187,100,185,120,17,33,46,255,170,251,139,81,240,166,192,16,91,196,146,204,178,191,221,235,112,155,88,210,218,33,130,220,118,136,32,153,221,251,139,216,37,150,180,118,137,61,110,203,254,24,100,96,248,23,24,193,24,205,163,65,199,204,2,57,172,141,195,178,56,172,136,195,74,55,172,116,195,74,55,172,116,195,74,55,172,116,195,74,55,172,116,195,138,3,99,52,143,6,243,88,93,96,232,197,161,134,65,80,86,18,24,122,177,191,48,136,194,74,2,67,111,51,74,51,74,115,30,155,120,99,27,207,250,1,131,80,1,233,134,253,27,12,16,81,252,23,250,193,4,13,29,56,27,195,86,110,216,199,193,208,209,116,52,29,205,40,140,204,110,110,216,206,13,251,57,24,70,129,146,48,132,45,189,203,201,123,83,16,143,253,28,140,209,192,193,214,12,38,105,138,230,238,13,13,39,115,165,153,156,76,210,73,210,108,220,96,136,72,34,146,136,36,130,100,216,174,45,251,225,101,67,188,236,136,151,45,49,204,163,113,154,160,73,154,162,105,154,161,33,130,189,91,176,121,99,199,188,108,153,97,136,96,19,199,206,25,134,8,246,113,193,70,142,93,52,12,17,236,229,216,76,155,74,157,49,87,155,42,158,49,91,155,10,159,49,95,155,234,159,61,117,27,215,0,48,103,155,170,161,49,107,155,138,162,49,111,155,106,163,49,115,155,74,164,49,119,155,42,165,49,123,155,10,166,49,127,155,234,166,49,131,155,202,167,49,135,155,170,168,49,139,155,138,169,49,143,155,106,42,236,97,175,169,120,123,216,61,236,238,53,63,215,253,124,118,246,154,160,207,207,94,47,244,229,217,107,137,190,62,171,150,233,176,118,216,146,61,108,29,182,212,71,221,252,83,198,79,19,63,118,126,43,244,91,155,223,170,124,213,109,93,187,117,107,136,123,122,220,115,227,158,24,247,44,110,33,237,121,237,188,118,222,167,86,237,188,215,222,197,245,119,113,13,94,92,135,23,215,226,197,245,120,113,77,94,168,203,83,155,247,215,231,157,87,157,222,181,122,113,189,94,92,179,23,121,222,60,111,158,247,184,199,113,143,82,147,120,222,59,21,113,231,33,238,36,196,157,129,184,221,143,219,247,184,29,143,219,235,184,93,142,81,135,121,94,236,105,37,127,180,210,198,217,60,91,103,251,236,156,93,218,119,243,113,106,105,223,217,195,190,195,190,195,190,195,190,195,190,195,190,195,250,97,253,176,126,88,63,172,31,214,15,235,135,245,195,66,183,42,254,200,162,181,179,239,172,159,141,179,121,182,206,246,89,161,150,182,15,219,135,237,195,246,97,251,176,125,216,62,108,31,182,15,219,135,157,195,206,97,231,176,115,216,57,236,28,118,14,59,135,157,195,206,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,247,166,236,220,65,196,160,255,238,64,98,48,13,79,131,107,8,13,169,65,253,60,251,115,14,138,98,138,242,20,229,41,202,83,148,167,40,79,81,158,162,60,69,121,138,242,20,229,41,138,43,138,43,138,43,138,43,74,201,87,242,149,124,245,231,211,19,74,79,40,61,161,244,132,210,19,74,79,104,69,105,69,105,69,105,69,105,69,105,69,105,69,105,69,105,69,105,69,25,69,25,69,25,69,25,69,25,69,185,76,183,43,61,87,122,174,244,92,251,243,149,134,214,48,26,238,9,43,61,87,122,174,244,92,233,185,210,115,165,231,74,207,149,158,43,61,87,122,174,244,92,233,185,210,115,165,231,186,162,184,162,184,162,184,162,72,207,149,144,43,33,87,210,173,196,90,137,181,253,231,211,99,37,207,74,158,149,46,43,93,86,186,236,159,46,163,208,35,184,126,61,46,171,0,126,43,222,175,192,239,126,241,115,208,15,72,147,239,125,26,76,195,211,224,26,66,67,106,80,148,167,40,79,81,158,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,184,162,132,162,132,162,148,124,37,95,235,102,43,116,43,116,43,116,43,88,11,208,2,140,130,141,112,35,220,8,55,194,141,214,50,130,143,224,127,154,173,224,43,248,253,18,253,76,98,153,196,50,169,100,82,201,164,146,73,37,147,60,38,121,76,242,152,228,49,201,99,210,197,36,129,73,2,147,4,38,9,238,27,3,7,61,40,4,144,4,38,9,172,255,110,234,233,173,167,75,16,147,32,38,65,76,130,152,4,49,9,98,18,196,36,8,219,199,27,20,69,186,152,116,49,233,98,210,197,164,139,253,233,178,138,178,138,178,138,178,138,178,23,229,73,37,125,119,192,80,26,254,124,163,225,158,240,36,214,147,88,250,50,129,193,53,40,138,206,146,190,85,96,80,20,9,249,36,164,190,94,96,80,20,9,249,36,164,190,103,96,80,148,80,148,80,148,80,148,80,20,233,249,164,167,62,89,124,79,122,234,219,197,247,164,167,62,98,124,79,122,234,107,198,247,164,167,62,107,124,79,122,234,251,198,247,164,167,62,116,124,79,122,234,139,199,247,164,167,62,125,124,79,122,234,27,200,247,254,244,212,103,160,235,213,222,231,250,30,116,221,26,6,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,239,163,10,7,69,73,69,73,69,145,158,46,61,93,122,250,252,249,244,4,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,134,244,12,233,25,127,31,218,62,215,16,26,46,74,72,207,144,158,33,61,195,255,124,165,161,53,140,6,61,65,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,107,74,57,40,74,42,74,42,138,52,11,105,22,210,44,164,89,72,179,144,102,33,205,66,154,133,52,11,105,22,210,44,164,89,74,179,148,102,41,205,82,154,165,52,75,105,150,250,92,153,95,107,24,13,138,98,138,98,138,98,138,34,9,82,18,164,36,72,73,144,146,32,37,65,74,130,148,4,41,9,82,18,164,36,72,73,144,169,40,169,40,165,40,165,40,165,40,165,40,165,40,165,40,165,40,165,40,42,82,169,34,149,247,157,243,171,191,111,178,98,91,98,91,98,91,98,91,98,91,98,91,98,91,98,91,230,26,20,197,20,69,53,188,84,195,75,53,188,84,195,75,101,169,84,150,74,53,188,84,157,74,121,183,148,119,75,121,183,148,119,75,121,162,196,182,196,182,196,182,196,182,196,182,196,182,234,15,160,199,254,177,85,101,46,149,165,82,89,42,149,165,82,89,42,165,209,82,26,45,165,209,82,26,45,189,246,165,215,190,244,218,151,94,251,210,107,95,122,237,75,175,125,139,109,139,109,139,109,139,109,139,109,139,109,191,63,64,107,24,13,247,216,86,86,108,101,197,214,91,220,122,139,91,111,113,235,45,110,189,197,173,183,184,245,22,183,222,226,214,91,220,122,139,91,111,113,235,45,110,189,197,221,243,223,255,224,169,252,178,154,29,0,0])))