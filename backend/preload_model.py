import os
os.environ['FASTEMBED_CACHE_PATH'] = '/app/fastembed_cache'
from fastembed import TextEmbedding
print('Downloading model...')
TextEmbedding(model_name='BAAI/bge-small-en-v1.5')
print('Model ready!')