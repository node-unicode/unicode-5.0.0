module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,153,75,150,236,170,14,68,39,116,26,137,209,143,177,220,245,230,63,141,23,91,81,141,4,151,33,100,107,131,145,160,254,123,253,239,205,191,247,254,157,223,79,191,163,223,167,223,213,47,244,75,253,74,191,214,111,244,83,191,163,126,71,253,142,250,29,245,59,234,119,212,239,168,223,81,191,163,126,71,253,62,245,251,212,239,83,191,214,245,232,122,234,223,247,93,253,66,191,212,143,191,91,191,209,239,253,251,238,79,191,163,223,167,159,250,93,245,187,234,119,213,239,170,223,85,191,171,126,161,126,161,126,161,126,161,126,161,126,161,126,161,126,161,62,161,62,169,62,169,62,169,62,169,62,169,62,169,62,41,59,169,246,82,91,233,126,233,94,233,94,233,94,235,94,235,94,235,94,235,94,235,158,222,251,27,221,27,221,27,221,27,221,123,186,247,116,239,233,158,8,126,226,119,197,238,138,219,21,179,43,94,87,172,174,56,93,113,186,98,116,197,231,138,205,21,151,43,38,87,12,174,252,191,31,247,212,87,126,95,249,124,229,239,149,175,87,126,94,249,120,229,223,149,111,55,116,79,126,93,249,116,229,207,149,47,87,190,92,249,114,229,203,149,47,87,190,92,249,114,229,203,149,47,87,190,92,249,114,91,207,24,61,119,244,92,249,114,71,207,150,47,87,190,220,167,123,79,239,33,63,66,99,31,122,255,208,187,135,198,57,244,254,161,119,15,141,107,104,76,67,227,25,122,239,208,123,135,198,45,244,222,161,177,10,141,79,104,108,66,239,27,26,147,208,251,134,198,34,244,206,33,238,161,247,140,146,189,82,91,233,239,82,91,169,191,230,69,180,238,181,238,181,238,137,121,136,121,136,121,232,61,67,204,67,239,25,122,207,16,243,16,243,16,243,208,251,134,152,167,152,167,222,55,197,59,245,206,169,247,77,205,201,212,124,76,189,115,234,157,83,239,156,154,115,169,249,150,122,231,212,59,167,88,167,88,167,88,167,88,167,88,167,222,61,197,58,245,238,169,247,78,177,78,177,78,177,78,177,78,249,144,98,157,98,157,98,157,242,35,197,59,229,75,138,121,202,159,20,247,148,63,41,230,41,127,82,220,83,126,164,252,72,249,145,242,35,229,71,138,121,202,151,124,178,33,127,82,254,164,248,167,62,197,148,95,165,111,177,228,91,105,60,74,115,170,244,45,150,252,44,125,139,37,95,75,223,98,201,223,210,24,149,124,46,205,177,146,223,165,177,42,249,94,154,107,37,255,75,243,173,196,160,52,231,74,28,74,243,174,196,162,52,134,37,30,165,113,44,49,41,205,193,18,151,210,247,87,98,83,26,211,18,159,210,247,87,98,84,26,223,18,167,210,24,151,88,149,190,191,18,175,210,88,151,152,149,190,191,18,183,210,152,151,216,149,190,193,18,191,210,55,88,98,88,250,6,75,28,75,115,161,196,178,82,253,196,179,82,253,196,180,196,180,52,55,74,92,75,92,75,92,75,92,75,92,75,92,75,92,75,115,165,52,167,75,124,75,243,186,52,103,74,156,75,156,75,243,166,196,186,52,119,74,243,188,52,127,74,115,189,196,190,52,215,75,252,75,107,79,105,12,106,212,79,227,80,79,253,52,22,165,177,40,141,69,105,44,74,99,81,26,139,22,239,22,239,150,223,45,191,91,126,183,252,110,249,61,250,123,164,29,105,71,218,145,246,137,255,83,219,19,147,23,92,235,158,152,60,49,121,98,242,196,228,137,201,19,147,39,38,79,76,158,152,60,49,121,98,242,196,228,137,201,19,147,39,38,79,76,158,190,151,39,46,79,92,158,184,60,113,121,226,242,196,229,137,203,19,151,39,46,79,92,158,184,60,113,121,226,242,196,229,137,201,107,86,118,221,23,135,39,14,79,12,222,112,79,26,189,251,227,189,229,239,35,2,120,253,103,241,223,149,127,151,253,93,243,119,209,103,213,255,157,13,15,116,97,209,255,177,218,255,88,230,127,172,243,191,38,104,52,13,77,216,104,12,244,6,14,172,52,86,154,206,67,103,34,193,111,80,12,138,65,49,40,6,197,108,172,65,49,40,30,138,135,226,161,120,40,30,138,135,226,161,120,40,222,134,167,141,79,4,40,156,217,80,182,177,108,131,217,70,179,13,103,27,207,54,160,57,162,57,164,161,216,160,182,81,109,195,218,198,181,13,108,27,217,54,180,225,244,6,182,243,209,239,163,203,71,235,71,195,165,225,210,112,105,184,52,92,26,130,134,216,120,73,67,208,16,52,36,13,73,67,109,177,161,148,214,162,181,105,5,236,129,233,1,231,129,228,134,211,3,191,3,186,51,27,121,105,128,213,1,211,129,208,1,206,121,27,143,9,198,208,248,0,241,193,224,195,253,15,207,63,156,254,240,247,195,203,111,163,55,161,155,88,125,8,212,135,40,125,8,209,135,24,125,8,208,135,232,124,8,205,135,184,124,8,202,135,136,124,8,199,42,104,192,75,34,241,33,12,31,98,240,33,8,31,162,240,33,12,31,226,240,33,16,31,34,241,33,20,31,98,241,33,24,31,162,241,33,28,31,226,241,33,32,31,34,242,33,36,31,98,242,33,40,31,162,242,33,44,31,226,242,33,48,31,34,179,6,161,41,134,130,63,153,132,23,43,196,195,67,64,60,68,68,21,73,81,20,40,152,132,132,72,13,32,10,204,19,45,85,160,96,18,94,30,68,244,60,132,79,21,40,120,100,48,9,3,226,196,84,21,151,34,40,146,162,40,154,98,40,80,48,9,9,184,42,80,48,30,196,94,21,90,136,136,186,42,246,170,40,154,98,40,88,150,52,40,42,14,197,71,113,41,80,92,20,172,98,193,50,70,140,86,129,34,80,4,138,64,17,40,2,69,160,8,20,129,34,80,4,138,68,145,40,18,69,162,72,20,137,34,81,36,138,68,145,40,10,69,161,40,20,133,162,80,20,138,66,81,40,10,69,161,104,20,141,162,81,52,138,70,209,40,26,69,163,104,20,141,98,80,12,138,65,49,40,6,197,160,24,20,131,98,80,12,138,135,226,161,120,40,30,138,135,226,161,96,245,143,135,226,161,208,88,118,106,44,155,84,67,197,71,113,41,130,34,41,138,162,41,134,2,197,65,113,80,28,20,7,197,65,193,88,230,65,113,80,28,20,7,197,135,226,67,241,161,248,80,48,230,164,45,42,80,48,230,201,152,147,194,116,50,230,36,50,42,80,48,230,201,152,147,212,168,64,193,152,39,99,78,130,211,201,152,147,230,168,64,193,152,39,99,78,202,163,2,5,99,158,140,57,233,79,39,99,78,18,164,2,5,99,158,140,57,9,145,10,20,140,121,50,230,36,71,157,140,57,41,146,10,20,140,57,153,82,147,42,53,185,82,147,44,53,217,82,147,46,117,50,230,201,152,147,57,169,64,193,152,147,68,53,89,148,10,20,140,121,50,230,201,152,39,99,158,140,57,9,150,10,20,140,121,50,230,36,91,42,80,48,230,201,152,147,120,53,153,87,147,122,53,185,87,147,124,53,217,87,147,126,53,249,87,147,128,53,25,88,147,130,53,57,88,147,132,53,89,88,147,134,53,121,88,147,136,53,153,88,147,138,53,185,88,147,140,53,217,88,147,142,53,249,88,147,144,53,25,73,147,142,52,185,72,147,136,52,89,72,147,130,52,249,71,147,124,168,160,129,55,104,30,222,60,119,51,145,230,105,205,131,154,103,52,230,27,203,205,68,106,230,80,51,125,154,153,211,76,154,102,190,52,83,165,153,37,205,4,105,230,198,102,52,155,206,52,147,161,153,7,205,20,104,70,191,25,248,102,204,155,225,110,70,186,25,228,102,124,155,161,109,70,181,25,208,102,44,155,97,108,70,176,25,188,102,220,154,33,107,70,171,241,188,241,188,241,188,241,188,241,188,241,188,241,188,241,188,241,188,241,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,240,124,248,72,6,247,135,143,100,96,48,124,36,3,136,193,253,193,253,137,253,19,25,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,15,238,147,63,54,201,163,10,26,112,127,112,255,225,254,195,253,135,251,15,247,31,238,63,220,127,184,255,112,255,225,254,195,253,135,251,15,247,31,238,63,220,127,184,255,88,5,30,195,253,88,5,30,99,78,158,218,36,170,77,166,218,164,170,77,46,218,36,163,77,54,218,164,163,77,62,218,36,164,77,166,217,164,154,77,174,217,36,155,77,182,217,164,155,77,190,169,2,5,223,32,105,166,10,180,184,250,248,6,73,57,53,178,104,73,154,127,250,182,134,108,83,197,71,113,41,130,34,85,104,117,84,209,20,67,241,84,124,40,62,20,31,138,15,197,229,234,238,21,218,139,246,162,37,65,255,93,180,23,109,112,21,92,37,86,18,43,137,54,209,38,218,68,155,104,19,109,162,72,20,133,162,80,20,253,138,126,69,191,162,95,209,175,232,215,244,107,250,13,87,179,87,60,99,120,198,160,29,180,131,118,208,62,174,222,94,97,69,3,63,36,174,67,226,58,36,174,67,226,58,36,164,67,66,58,36,164,67,66,58,36,164,67,46,58,228,162,163,116,73,197,69,123,209,194,229,128,132,12,116,78,112,21,123,69,63,205,113,125,60,116,6,196,193,193,83,123,133,172,120,16,174,146,134,170,64,129,171,167,121,90,243,52,28,60,248,70,242,57,156,118,232,251,82,195,133,61,7,23,42,134,130,123,236,151,72,8,134,12,96,200,0,134,144,63,196,218,33,174,14,49,116,136,156,67,228,28,34,226,16,17,135,136,56,68,196,33,250,13,129,101,8,44,67,96,25,2,203,16,88,134,192,50,4,150,33,176,12,129,101,8,44,67,96,25,2,203,16,88,134,192,50,4,150,33,176,12,65,228,145,85,61,178,170,71,86,245,200,170,30,89,213,35,171,122,100,85,143,172,234,145,85,61,178,170,71,86,245,200,170,30,89,213,35,171,122,100,85,143,172,234,197,238,1,119,19,184,187,64,111,3,81,236,70,112,119,130,187,21,220,189,96,120,191,176,199,104,187,229,184,187,231,184,187,233,184,187,235,184,187,237,184,187,239,184,187,241,224,248,136,114,183,25,223,106,119,27,194,113,18,229,106,191,213,238,166,132,227,37,202,213,222,213,254,109,81,86,235,157,202,93,173,55,44,119,181,222,183,220,213,238,246,133,161,164,92,109,172,118,55,51,55,86,187,123,154,27,171,221,173,205,141,213,218,199,92,237,110,116,110,174,54,189,67,90,109,174,54,87,155,171,205,213,214,246,223,253,208,173,109,173,189,223,107,173,215,206,236,245,248,122,109,62,151,171,122,222,125,237,246,107,55,132,155,135,59,7,119,254,237,220,219,121,183,115,238,205,183,41,183,117,153,199,210,142,229,28,75,56,150,109,44,213,184,222,217,109,235,50,140,165,23,222,246,121,223,231,141,159,119,126,222,250,45,153,88,38,145,222,22,110,235,18,32,127,86,185,4,98,183,133,177,28,98,55,134,177,59,195,216,173,97,236,222,48,218,123,202,109,221,237,97,236,254,48,150,73,236,14,49,118,139,24,187,71,140,221,36,146,0,107,69,217,25,149,235,99,126,190,115,183,220,131,221,245,55,119,70,229,122,157,59,163,114,125,207,157,81,121,189,133,93,237,114,200,157,81,185,52,114,103,84,46,147,220,25,149,75,38,119,70,229,242,201,157,81,185,148,114,103,84,46,171,220,25,149,75,44,119,70,165,247,204,59,163,210,91,231,157,81,185,12,115,103,84,46,201,220,25,69,126,90,26,180,218,210,215,179,37,199,88,95,253,182,220,163,44,14,160,130,205,38,229,246,239,237,223,219,159,163,165,100,158,83,214,150,189,229,108,185,173,123,220,117,247,192,235,250,200,107,15,189,238,30,123,221,61,248,186,123,244,117,247,240,235,238,241,23,7,184,42,107,181,181,218,90,109,173,182,86,91,171,173,213,214,106,107,181,181,90,142,198,106,15,13,107,143,13,107,15,14,107,143,14,107,15,15,107,143,15,107,15,16,107,143,16,107,15,17,107,143,17,107,15,18,107,143,18,107,15,19,107,143,19,107,15,20,107,143,20,107,15,21,107,143,21,107,15,22,107,143,22,107,15,23,107,143,23,107,15,24,107,143,24,107,15,25,107,143,25,107,15,26,107,143,26,107,15,27,107,143,27,107,15,28,107,143,28,107,15,29,107,143,29,107,15,30,107,143,30,107,15,31,107,143,31,107,15,32,171,118,254,188,217,73,246,102,103,153,170,114,213,174,198,149,123,238,84,123,179,115,77,213,231,234,186,178,149,176,149,176,149,176,149,176,149,176,149,180,149,180,149,180,149,180,149,180,149,180,149,180,149,180,149,180,149,180,149,113,219,184,109,220,230,147,27,206,21,183,242,19,158,159,240,108,218,167,57,243,44,247,177,206,60,203,119,137,83,134,245,115,117,92,125,174,174,171,112,149,174,202,149,15,135,246,36,236,189,159,173,28,91,57,182,98,144,207,32,159,65,62,131,124,6,249,12,242,25,228,51,200,103,144,207,32,159,65,62,131,124,6,249,12,242,25,228,51,200,103,144,207,32,159,65,62,131,124,6,249,12,146,3,210,173,108,165,108,165,108,197,32,159,65,62,131,124,239,175,205,166,255,14,198,76,240,249,132,140,212,116,171,227,234,115,117,93,165,171,114,213,174,198,149,229,199,242,99,249,177,252,88,78,112,167,178,149,112,91,184,45,220,22,127,109,126,66,248,9,225,39,132,159,144,126,66,250,9,105,43,105,43,105,43,105,43,105,43,105,43,105,43,105,43,101,43,101,43,101,43,101,43,101,43,101,43,101,43,101,43,207,109,207,109,207,109,239,175,205,79,248,59,106,52,200,99,144,199,32,143,65,238,97,44,85,186,42,87,237,106,92,217,138,121,30,243,60,230,121,204,243,152,231,49,207,61,164,165,178,149,99,43,254,55,228,49,207,99,158,199,60,143,121,30,243,60,230,121,204,243,152,231,49,207,99,158,199,60,143,121,30,243,60,230,121,204,243,152,231,49,207,99,158,199,60,143,121,30,243,60,230,121,202,86,202,86,218,86,218,86,204,243,239,232,246,51,207,191,51,220,207,60,255,14,115,63,243,252,59,213,253,204,243,239,120,247,51,79,159,243,106,7,101,43,230,249,153,167,79,126,85,217,138,121,126,230,249,153,167,143,132,85,217,202,103,43,159,173,124,182,242,217,138,121,250,184,247,247,153,167,207,125,127,159,121,250,0,248,247,153,167,79,130,127,159,121,250,72,248,247,153,167,207,134,127,159,121,250,144,88,149,173,152,231,103,158,62,54,86,101,43,230,249,153,167,15,146,85,217,74,219,74,219,202,30,45,255,174,121,94,243,188,230,121,127,127,109,229,170,93,141,171,125,194,53,207,107,158,215,60,175,121,94,243,188,230,121,205,243,154,231,53,207,107,158,215,60,175,121,94,243,188,230,185,105,61,149,173,124,182,242,217,138,121,94,243,188,230,121,243,175,205,79,48,207,107,158,215,60,175,121,94,243,188,230,121,205,243,154,231,53,207,107,158,215,60,175,121,94,243,188,230,121,205,243,154,231,253,227,217,182,210,182,210,182,178,135,247,191,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,48,207,248,108,229,179,149,107,43,215,86,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,254,120,142,173,140,173,140,173,140,173,140,173,236,255,73,126,105,130,121,254,254,42,87,237,106,92,173,205,52,193,52,193,52,193,52,193,52,193,52,193,52,193,52,193,52,193,52,193,52,193,52,193,221,30,80,217,202,181,149,107,43,215,86,174,173,92,91,9,203,195,114,7,204,116,192,76,7,204,116,192,76,163,75,163,75,163,203,254,107,179,105,163,75,163,75,163,75,163,75,163,75,163,75,163,75,163,203,63,116,99,43,99,43,99,43,99,43,207,86,158,173,60,91,121,182,226,128,153,14,152,233,128,153,94,217,211,43,123,121,101,47,175,236,229,149,168,188,18,149,9,150,9,150,9,214,253,107,11,87,233,170,92,181,171,113,229,39,24,100,25,100,25,100,25,100,25,100,25,100,57,82,150,35,101,57,82,150,35,101,121,101,47,175,236,229,149,189,188,178,151,87,162,242,18,84,94,130,202,159,76,249,147,41,127,50,229,79,166,76,176,76,176,76,176,76,176,76,176,76,176,76,176,76,176,76,176,156,114,148,65,150,65,182,65,182,65,182,65,182,65,182,151,244,254,251,199,167,151,160,246,18,212,94,130,218,75,80,123,9,106,47,65,237,37,168,253,229,180,191,156,246,151,211,254,114,218,95,78,251,203,105,19,108,19,108,19,108,19,108,19,108,19,108,19,108,19,108,19,108,175,229,109,144,109,144,109,144,109,144,109,144,109,144,237,181,167,189,246,180,215,158,246,218,211,94,123,218,107,79,123,237,105,175,61,237,181,167,253,229,180,191,156,246,151,211,254,114,218,95,78,251,203,233,126,255,251,63,8,47,227,79,45,38,0,0])))