# GUI
from tkinter import * 
from Modules import *
root = Tk()

root.geometry("800x600")
root.title("Sign In")
label=Label(root, text="Welcome",font="Algerian 30", fg="red")
label.grid(row = 0,column =0, padx = (200,0))
label2 = Label(root, text="to Hotel Taj",font="Algerian 30", fg="red")
label2.grid(row = 0,column =1)
user = Label(root, text="User Name",font="Algerian 16",anchor=W)
pwd = Label(root, text="Password",font="Algerian 16",anchor=W)


user.grid(row=1,column =0,padx=(300,5),pady=20)
pwd.grid(row=2,column =0,padx=(300,5),pady=16)

uservalue = StringVar()
pwdvalue = StringVar()

userentry = Entry(root, textvariable = uservalue)
pwdentry = Entry(root,show ='*', textvariable = pwdvalue)

userentry.grid(row=1,column=1,sticky = W)
pwdentry.grid(row=2,column=1, sticky = W)

bt1 =Button(text="Login",command = lambda:signin(uservalue.get(),pwdvalue.get(),root),padx=20,pady=10,font="20",bg="grey",fg="white")
bt1.grid(row=3,column=1,padx=(0,80),pady=10)
Button(root,text = "History",command = lambda: history(),font="20",bg = "green",fg="white").grid(row =3,column =2,padx=(0,80),pady=10)

root.mainloop()