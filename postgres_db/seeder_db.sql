INSERT INTO "user" (name, email, phone,created_at,updated_at)
	VALUES('lucas', 'lucas@email.com', '4998306291',current_timestamp, current_timestamp);

INSERT INTO "location"(coordinates,user_id,created_at,updated_at)
	VALUES('{"x":"0","y":"1"}',1,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);