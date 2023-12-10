<?php

namespace Google\AdsApi\AdManager\v202302;


/**
 * This file was generated from WSDL. DO NOT EDIT.
 */
class updateLineItemsResponse
{

    /**
     * @var \Google\AdsApi\AdManager\v202302\LineItem[] $rval
     */
    protected $rval = null;

    /**
     * @param \Google\AdsApi\AdManager\v202302\LineItem[] $rval
     */
    public function __construct(array $rval = null)
    {
      $this->rval = $rval;
    }

    /**
     * @return \Google\AdsApi\AdManager\v202302\LineItem[]
     */
    public function getRval()
    {
      return $this->rval;
    }

    /**
     * @param \Google\AdsApi\AdManager\v202302\LineItem[]|null $rval
     * @return \Google\AdsApi\AdManager\v202302\updateLineItemsResponse
     */
    public function setRval(array $rval = null)
    {
      $this->rval = $rval;
      return $this;
    }

}
