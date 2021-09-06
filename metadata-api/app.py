import pickle

from flask import Flask, jsonify


app = Flask(__name__)
with open('metadata.pkl', 'rb') as f:
    metadata_dict = pickle.load(f)

@app.route('/<nft_id>')
def metadata(nft_id):
    return jsonify(metadata_dict[int(nft_id)])

