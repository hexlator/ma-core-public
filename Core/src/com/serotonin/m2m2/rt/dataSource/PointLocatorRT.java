/*
    Copyright (C) 2014 Infinite Automation Systems Inc. All rights reserved.
    @author Matthew Lohbihler
 */
package com.serotonin.m2m2.rt.dataSource;

/**
 * This type provides the data source with the information that it needs to locate the point data.
 * 
 * @author mlohbihler
 */
abstract public class PointLocatorRT {
    abstract public boolean isSettable();

    public boolean isRelinquishable() {
        return false;
    }
}
