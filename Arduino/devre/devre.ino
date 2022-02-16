void setup() {
  Serial.begin(9600);
  pinMode(A0, INPUT);
}

float value;
void loop() {
  delay(50);
  value = (analogRead(A0)-507)/5,16;
  Serial.println(value);
}
