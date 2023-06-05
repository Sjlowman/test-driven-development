Roman_numerals exercise. Instructions, followed by my plan/logic
Instructions - part 1 👉 Read the Roman Numerals Kata requirements. You can find it in the following link: https://codingdojo.org/kata/RomanNumerals/ (there are many websites like Coding Dojo outlining the most popular Katas, one of them is the Roman Numerals Kata). 👉 Please note that the kata ‘clues’ section refers to some C# testing frameworks like XUnit, please ignore these. 👉 Solve the Roman Numerals kata in the programming language for the programme you are attending, if you are unsure, please reach out to a tech coach. 👉 Please set aside up to to make a start on this Kata, don’t worry if you don’t reach a full solution as this Kata is designed for you to practise test-driven development and understand the process. We don't expect you to have finished the solution but that you have had a good go at using Test-Driven Development.
💡Tips & Tricks on how to get started Set up your Code Editor / IDE beforehand so you’re ready to write the unit tests and code. Before you write your code, make sure you understand the problem statement. The Kata may seem large at first, so break it down into smaller, manageable pieces. Please note down your test cases, inputs and outputs on a notepad like Word / Notepad++ / piece of paper to validate your understanding. Use the Triple A Structure - Arrange, Act, Assert to guide you when writing your unit tests Use the RED - GREEN - REFACTOR cycle: Write one failing test first and write the simplest code to make that test pass, commit the code, then see if there is any opportunity to refactor. If not, move onto writing your next test and follow the cycle through as you build up your solution. Remember to consider a range of different test cases and edge cases.
💡Apply PseudoCode to help you think through your logic Pseudocode is a description of the steps for an algorithm and can be used to help you think through your logic.

Roman numerals
Start with simply receiving 1 and returning I

Then test receiving a non-number and adding error handling

Then go back to testing 1 but make the code calculate the I, rather than simply returning 1 for everything.

Key switch points for Roman numerals are at multiples of 5 and 10 in the units, tens, hundreds and thousands column

Also make sure that 0s are handled properly

Rules:
Divide it by 1000 and deal with the 1000 part first, and pass on the remainder to the 100 section. Put any 1000 result at the start of the romanString. If it's 5 = V, 4 = MV, 3 = MMM, 2 = MM, 1 = M
Divide the remainder by 100 and deal with the 100 part next. Apend the 100 result to the romanString and pass the remainder to the 10 section
Divide the remainder by 10 and deal with the 10 part next. Apend the 10 result to the romanString and pass the remainder to the unit section
Work out the unit section and apend that to the romanString
Return romanString
Examples of a 1000+ number series:
1370 MCCCLXX, 1371 MCCCLXXI, 1372 MCCCLXXII, 1373 MCCCLXXIII, 1374 MCCCLXXIV,
1375 MCCCLXXV, 1376 MCCCLXXVI, 1377 MCCCLXXVII, 1378 MCCCLXXVIII, 1379 MCCCLXXIX

Take the number that's been input and see if it has any thousands (using Math.floor(x/1000, or by simply converting to string and going through one by one) > 0
Yes: Generate the thousands part using the algorithm and put that in the resultString (or store in thousandsDecimal) || Go onto the hundreds by passing number % 1000
Take the remainder and see if it has any hundreds (using Math.floor(x/100) > 0
Yes: Generate the hundreds part using the algorithm and apend* that onto the resultString (or store in hundredsDecimal) || Go onto the tens by passing number % 100
Take the remainder and see if it has any tens (using Math.floor(x/10) > 0
Yes: Generate the tens part using the algorithm and apend* that onto the resultString (or store in tensDecimal) || Go onto the units by passing number % 10
Take the remainder and see if it has any units (using Math.floor(x/1) > 0
Yes: Generate the units part using the algorithm and apend\* that onto the resultString (or store in unitsDecimal)

return the resulting string/go onto the string generation

- might be better to store these codes in thousandsRoman, hundreedsRoman, tensRoman and unitsRoman for now, and return the concatenation.

Format for the number generation - for the Thousands, the lower should be M, the mid should be V, not needed any higher (mid not even really needed - should I return an error if the number is > 4000?) - for the Hundreds, the lower should be C, the mid code should be D, the upper should be M - for the tens, the lower should be X, the mid should be L, the upper should be C - for the units, the lower should be I, the mid should be V, the upper should be X

Use a template and update it using either string replace/regEx.
Pattern/algorithm is
0: ""
1: lower
2: lowerLower
3: lowerLowerLower
4: lowerMid
5: mid
6: midLower
7: midLowerLower
8: midLowerLowerLower
9: lowerUpper
10 upper

In shorthand code for the regEx:
0: ""
1: l
2: ll
3: lll
4: lm
5: m
6: ml
7: mll
8: mlll
9: lu
10 u

\w
var result = str.replace(/l/g, lower).replace(/m/g, mid).replace(/u/g, upper);

Started off with this initial logic, now refined
If it's divisible by 1000 exactly, then take the first number (Note, this is a dashed V, so don't cover this yet. Also technically true for all of the thousands but given there is an M in them, this can be overlooked and properly tested for now)
5 = V, 4 = MV, 3 = MMM, 2 = MM, 1 = M
If it's divisible by 100 exactly, then take the first number:
5 = D 4 - CD - 3 - CCC 2 - CC 1 - C

Appendices
Calculations and lists of conversions:
1 I
2 II
3 III
4 IV
5 V .......anything that ends in a 5 has a V at the end. To check if it ends in a 5, you could check if %5 is 0 and %2 is not
6 VI
7 VII
8 VIII
9 IX
10 X ......anything that ends in a 0 has an X at the end? Unless it's 50 or a multiple of 100 or a multiple of 1000
11 XI
12 XII
13 XIII
14 XIV
15 XV
16 XVI
17 XVII
18 XVIII
19 XIX
20 XX
21 XXI
22 XXII
23 XXIII
24 XXIV
25 XXV
26 XXVI
27 XXVII
28 XXVIII
29 XXIX
30 XXX
31 XXXI
32 XXXII
33 XXXIII
34 XXXIV
35 XXXV
36 XXXVI
37 XXXVII
38 XXXVIII
39 XXXIX
40 XL
41 XLI
42 XLII
43 XLIII
44 XLIV
45 XLV
46 XLVI
47 XLVII
48 XLVIII
49 XLIX
50 L
51 LI
52 LII
53 LIII
54 LIV
55 LV
56 LVI
57 LVII
58 LVIII
59 LIX
60 LX
61 LXI
62 LXII
63 LXIII
64 LXIV
65 LXV
66 LXVI
67 LXVII
68 LXVIII
69 LXIX
70 LXX
71 LXXI
72 LXXII
73 LXXIII
74 LXXIV
75 LXXV
76 LXXVI
77 LXXVII
78 LXXVIII
79 LXXIX
80 LXXX
81 LXXXI
82 LXXXII
83 LXXXIII
84 LXXXIV
85 LXXXV
86 LXXXVI
87 LXXXVII
88 LXXXVIII
89 LXXXIX
90 XC
91 XCI
92 XCII
93 XCIII
94 XCIV
95 XCV
96 XCVI
97 XCVII
98 XCVIII
99 XCIX
100 C
101 CI
102 CII
103 CIII
104 CIV
105 CV
106 CVI
107 CVII
108 CVIII
109 CIX
110 CX
111 CXI
112 CXII
113 CXIII
114 CXIV
115 CXV
116 CXVI
117 CXVII
118 CXVIII
119 CXIX
120 CXX
121 CXXI
122 CXXII
123 CXXIII
124 CXXIV
125 CXXV
126 CXXVI
127 CXXVII
128 CXXVIII
129 CXXIX
130 CXXX
131 CXXXI
132 CXXXII
133 CXXXIII
134 CXXXIV
135 CXXXV
136 CXXXVI
137 CXXXVII
138 CXXXVIII
139 CXXXIX
140 CXL
141 CXLI
142 CXLII
143 CXLIII
144 CXLIV
145 CXLV
146 CXLVI
147 CXLVII
148 CXLVIII
149 CXLIX
150 CL

10 X
20 XX
30 XXX
40 XL
50 L
60 LX
70 LXX
80 LXXX
90 XC
100 C
110 CX
120 CXX
130 CXXX
140 CXL
150 CL
160 CLX
170 CLXX
180 CLXXX
190 CXC
200 CC
210 CCX
220 CCXX
230 CCXXX
240 CCXL
250 CCL
260 CCLX
270 CCLXX
280 CCLXXX
290 CCXC
300 CCC
310 CCCX
320 CCCXX
330 CCCXXX
340 CCCXL
350 CCCL
360 CCCLX
370 CCCLXX
380 CCCLXXX
390 CCCXC
400 CD
410 CDX
420 CDXX
430 CDXXX
440 CDXL
450 CDL
460 CDLX
470 CDLXX
480 CDLXXX
490 CDXC
500 D

510 DX
520 DXX
530 DXXX
540 DXL
550 DL
560 DLX
570 DLXX
580 DLXXX
590 DXC
600 DC
610 DCX
620 DCXX
630 DCXXX
640 DCXL
650 DCL
660 DCLX
670 DCLXX
680 DCLXXX
690 DCXC
700 DCC
710 DCCX
720 DCCXX
730 DCCXXX
740 DCCXL
750 DCCL
760 DCCLX
770 DCCLXX
780 DCCLXXX
790 DCCXC
800 DCCC
810 DCCCX
820 DCCCXX
830 DCCCXXX
840 DCCCXL
850 DCCCL
860 DCCCLX
870 DCCCLXX
880 DCCCLXXX
890 DCCCXC
900 CM
910 CMX
920 CMXX
930 CMXXX
940 CMXL
950 CML
960 CMLX
970 CMLXX
980 CMLXXX
990 CMXC
1000 M

1010 MX
1020 MXX
1030 MXXX
1040 MXL
1050 ML
1060 MLX
1070 MLXX
1080 MLXXX
1090 MXC
1100 MC
1110 MCX
1120 MCXX
1130 MCXXX
1140 MCXL
1150 MCL
1160 MCLX
1170 MCLXX
1180 MCLXXX
1190 MCXC
1200 MCC
1210 MCCX
1220 MCCXX
1230 MCCXXX
1240 MCCXL
1250 MCCL
1260 MCCLX
1270 MCCLXX
1280 MCCLXXX
1290 MCCXC
1300 MCCC
1310 MCCCX
1320 MCCCXX
1330 MCCCXXX
1340 MCCCXL
1350 MCCCL
1360 MCCCLX
1370 MCCCLXX
1380 MCCCLXXX
1390 MCCCXC
1400 MCD
1410 MCDX
1420 MCDXX
1430 MCDXXX
1440 MCDXL
1450 MCDL
1460 MCDLX
1470 MCDLXX
1480 MCDLXXX
1490 MCDXC
1500 MD

100 C
200 CC
300 CCC
400 CD
500 D
600 DC
700 DCC
800 DCCC
900 CM
1000 M
1100 MC
1200 MCC
1300 MCCC
1400 MCD
1500 MD
1600 MDC
1700 MDCC
1800 MDCCC
1900 MCM
2000 MM
2100 MMC
2200 MMCC
2300 MMCCC
2400 MMCD
2500 MMD
2600 MMDC
2700 MMDCC
2800 MMDCCC
2900 MMCM
3000 MMM
3100 MMMC
3200 MMMCC
3300 MMMCCC
3400 MMMCD
3500 MMMD
3600 MMMDC
3700 MMMDCC
3800 MMMDCCC
3900 MMMCM
4000 MV
4100 MVC
4200 MVCC
4300 MVCCC
4400 MVCD
4500 MVD
4600 MVDC
4700 MVDCC
4800 MVDCCC
4900 MVCM
5000 V
