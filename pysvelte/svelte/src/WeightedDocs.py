from typing import List, Union

import numpy as np
import torch

Tensor = Union[np.ndarray, torch.Tensor]

Docs = list[list[str]]

def init(
    docs, acts, aggr='signed_absmax', thresholdOrPercentile='threshold', ordering='dynamic', theme='dark', k=5
):
    # if isinstance(docs, np.ndarray):
    #     assert len(docs.shape) == 2
    
    # assert len(acts.shape) == 2
    # assert acts.float().abs().max() <= 1.
    # assert acts.shape[0] == docs.shape[0]
    # assert acts.shape[1] == docs.shape[1]

    return
