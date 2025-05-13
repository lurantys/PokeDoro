class Node:
    def __init__(self, songname):
        self.data = songname
        self.next = None
        self.prev = None
class Playlist:
    def __init__(self):
        self.head = None
        self.tail = None
    def add(self, songname):
        new_node = Node(songname)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
    def play_next(self):
        if self.head == None:
            return None
        else:
            current_node = self.head
            self.head = self.head.next
            return current_node.data
    def play_prev(self):
        if self.head == None:
            return None
        else:
            current_node = self.tail
            self.tail = self.tail.prev
            return current_node.data
    def remove(self, songname):
        current_node = self.head
        while current_node != None:
            if current_node.data == songname:
                if current_node.prev == None:
                    self.head = current_node.next
                else:
                    current_node.prev.next = current_node.next
                if current_node.next == None:
                    self.tail = current_node.prev
                else:
                    current_node.next.prev = current_node.prev
                return
            current_node = current_node.next
    def shuffle(self):
        import random
        songlist = []
        current_node = self.head
        while current_node != None:
            songlist.append(current_node.data)
            current_node = current_node.next
        random.shuffle(songlist)
        self.head = None
        self.tail = None
        for song in songlist:
            self.add(song)
    def display(self):
        current_node = self.head
        while current_node != None:
            print(current_node.data)
            current_node = current_node.next
    def currently_playing(self):
        if self.head == None:
            print("No songs in playlist")
        else:
            print("Currently Playing:",self.head.data)
play = Playlist()
play.add("song1")
play.add("song2")
play.add("song3")
play.add("song4")
play.currently_playing()
play.shuffle()
play.display()
