// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

function conflictInterval(intervals){
    
    intervals.sort((a,b)=>a[0]-b[0])
 
    
    for(i=1;i<intervals.length;i++){
        if(intervals[i][0]<intervals[i-1][1]) return false
    }
    
    return true


}


conflictInterval([[1,4], [2,2], [7,9]])
conflictInterval([[4,5], [2,3], [3,6]])


