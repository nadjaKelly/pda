
# Testing task 1:
# Carry out static testing on the code below.
# Comment on any errors that you see below.


class CardGame

# lower_snake_case check_for_ace
  def checkforAce(card)
# This should be if card.value == 1
    if card.value = 1
      return true
    else
      return false
    end
  end
# def not dif  highest_card(card1, card2)
  dif highest_card(card1 card2)
# indented (
  if card1.value > card2.value
#  It should return card1
    return card
  else
    return card2
  end
end
# ) not necessary end
end
# indented (
def self.cards_total(cards)
# total isn't assigned a value -- should be 0
  total
  for card in cards
    total += card.value
# needs to interpolate total into string/ return out of the for loop
    return "You have a total of" + total
  end
end
# )
# class needs to be closed out with end
