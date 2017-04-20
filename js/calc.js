Sub CompareFee()

Dim yr As Integer
Dim yr2 As Integer
Dim ret1 As Double
Dim ret2 As Double
Dim fee1 As Double
Dim fee2 As Double
Dim ws1 As Worksheet
Dim sal As Double
Dim sal2 As Double
Dim ans1 As Integer
Dim ans2 As Integer
Dim ws4 As Worksheet

Set ws1 = ThisWorkbook.Sheets("Sheet1")
Set ws3 = ThisWorkbook.Sheets("Sheet2")
Set ws4 = ThisWorkbook.Sheets("Fund List")

ws1.Activate
ret1 = Range("b8")
ret2 = Range("e8")
fee1 = Range("b9")
fee2 = Range("E9")
ans1 = MsgBox("Is Fund A a MySuper Fund that listed here? If not, please select or nominate a fund from the Other Fund list.", vbYesNo, "Is Fund A a MySuper Fund that listed here?")
ans2 = MsgBox("Is Fund A a MySuper Fund that listed here? If not, please select or nominate a fund from the Other Fund list.", vbYesNo, "Is Fund B a MySuper Fund that listed here?")

'''first fund'''
Range("A15:x200").ClearContents
For yr = 0 To Range("B11")
Cells(15 + yr, 2) = yr
Cells(15 + yr, 3) = (1 + Range("H6")) ^ yr
Cells(15 + yr, 4) = Range("e5") * (1 + Range("k6")) ^ yr
sal = Cells(15 + yr, 4)
Cells(15 + yr, 5) = (sal * Range("H5") + Range("e10")) * (1 - Range("h7")) + Range("e11")
Cells(15 + yr, 6) = Range("j" & (14 + yr)) * ((1 + ret1) ^ 0.5 - 1) + (Range("j" & (14 + yr)) * (1 + ret1) ^ 0.5 + Cells(15 + yr, 5)) * ((1 + ret1) ^ 0.5 - 1)
Cells(15 + yr, 7) = Range("b7")

'''to calculate Fund A fees below. V2 2017 Feb the orginal formular is Cells(15 + yr, 8) = Range("j" & (14 + yr)) * fee1, it does not have the msgbox'

If ans1 = vbYes Then
Cells(15 + yr, 8) = Range("j" & (14 + yr)) * fee1

ElseIf ans1 = vbNo Then ''V3,add the "other list", do a hlookup here
Cells(15 + yr, 8) = Range("j" & (14 + yr)) * (WorksheetFunction.HLookup(ws4.Range("B6"), ws3.Range("b11:h14"), 2, False) + WorksheetFunction.HLookup(ws4.Range("B6"), ws3.Range("b11:h14"), 4, False)) _
+ WorksheetFunction.HLookup(ws4.Range("B6"), ws3.Range("b11:h14"), 3, False)
End If

If Cells(15 + yr, 8) + Cells(15 + yr, 7) > Cells(15 + yr, 6) Then
Cells(15 + yr, 9) = 0
Else
Cells(15 + yr, 9) = (Cells(15 + yr, 6) - Cells(15 + yr, 7) - Cells(15 + yr, 8)) * Range("h7")
End If


Cells(15 + yr, 10) = Cells(14 + yr, 10) + Cells(15 + yr, 5) + Cells(15 + yr, 6) - Cells(15 + yr, 7) - Cells(15 + yr, 8) - Cells(15 + yr, 9)
Cells(15 + yr, 11) = 1 / Cells(15 + yr, 3)
Cells(15 + yr, 12) = Cells(15 + yr, 10) * Cells(15 + yr, 11)

Next yr

'''second fund'''
For yr2 = 0 To Range("B11")
Cells(15 + yr2, 14) = yr2
Cells(15 + yr2, 15) = (1 + Range("H6")) ^ yr2
Cells(15 + yr2, 16) = Range("e5") * (1 + Range("k6")) ^ yr2
sal2 = Cells(15 + yr2, 4)
Cells(15 + yr2, 17) = (sal2 * Range("H5") + Range("e10")) * (1 - Range("h7")) + Range("e11")
Cells(15 + yr2, 18) = Range("v" & (14 + yr2)) * ((1 + ret2) ^ 0.5 - 1) + (Range("v" & (14 + yr2)) * (1 + ret2) ^ 0.5 + Cells(15 + yr2, 17)) * ((1 + ret2) ^ 0.5 - 1)
Cells(15 + yr2, 19) = Range("b7")

'''to calculate Fund A fees below. V2 2017 Feb the orginal formular is Cells(15 + yr2, 20) = Range("v" & (14 + yr2)) * fee2, it does not have the msgbox'

If ans2 = vbYes Then
Cells(15 + yr2, 20) = Range("v" & (14 + yr2)) * fee2
ElseIf ans1 = vbNo Then ''V3,add the "other list", do a hlookup here
Cells(15 + yr2, 20) = Range("v" & (14 + yr2)) * (WorksheetFunction.HLookup(ws4.Range("E6"), ws3.Range("b11:h14"), 2, False) + WorksheetFunction.HLookup(ws4.Range("E6"), ws3.Range("b11:h14"), 4, False)) _
+ WorksheetFunction.HLookup(ws4.Range("E6"), ws3.Range("b11:h14"), 3, False)
End If


If Cells(15 + yr2, 19) + Cells(15 + yr2, 20) > Cells(15 + yr2, 18) Then
Cells(15 + yr2, 21) = 0
Else
Cells(15 + yr2, 21) = (Cells(15 + yr2, 18) - Cells(15 + yr2, 19) - Cells(15 + yr2, 20)) * Range("h7")
End If


Cells(15 + yr2, 22) = Cells(14 + yr2, 22) + Cells(15 + yr2, 17) + Cells(15 + yr2, 18) - Cells(15 + yr2, 19) - Cells(15 + yr2, 20) - Cells(15 + yr2, 21)
Cells(15 + yr2, 23) = 1 / Cells(15 + yr2, 15)
Cells(15 + yr2, 24) = Cells(15 + yr2, 22) * Cells(15 + yr2, 23)

Next yr2

Dim ws2 As Worksheet
Set ws2 = ThisWorkbook.Sheets("Sheet3")
ws2.Range("A2") = ws1.Cells(15 + ws1.Range("b11"), 12)
ws2.Range("B2") = ws1.Cells(15 + ws1.Range("b11"), 24)

End Sub