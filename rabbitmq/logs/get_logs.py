import pika
import sys
import os
import json

class RabbitMsg(object):
    def __init__(self):
        self.headers = object.headers


def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()

    queue_name = "firehose"
    channel.queue_declare(queue=queue_name, durable=True)

    def callback(ch, method, properties, body):
        msg = {
            "time": properties.timestamp,
            "method": method.routing_key,
            # "routing": properties.routing_keys,
            "properties": properties.headers,
            "body": body,
        }
        print(" [x] %r" % msg)

    channel.basic_consume(queue=queue_name,
        auto_ack=True,
        on_message_callback=callback)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)