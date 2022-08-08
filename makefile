JFLAGS = -d
JAVAC = /usr/bin/javac
SRCDIR = src
BINDIR = bin
.SUFFIXES: .java .class

$(BINDIR)/%.class:$(SRCDIR)/%.java
	$(JAVAC) (JFLAGS) $(BINDIR)/ -cp $(BINDIR) $<

# This uses the line continuation character (\) for readability
# You can list these all on a single line, separated by a space instead.
# If your version of make can't handle the leading tabs on each
# line, just remove them (these are also just added for readability).
CLASSES = \
		App.class# \
		Blah.java \
		Library.java \
		Main.java 

CLASS_FILES = $(CLASSES:%.class=$(BINDIR)/%.class)

default: $(CLASS_FILES)

clean:
		rm $(BINDIR)/*.class

runImageFlip: $(CLASS_FILES)
	java -cp bin App images/input/merryGo.jpg images/output/merryFlip.jpg