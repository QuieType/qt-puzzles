ig.ENTITY.GravityRotateBlocker = ig.ENTITY.RotateBlocker.extend({
    init(a, d, c, e) {
        this.parent(a, d, c, e);
        this.coll.zGravityFactor = 1e3
    }
})