var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
;
var SwingAttack = /** @class */ (function () {
    function SwingAttack(weapon) {
        this.weapon = weapon;
    }
    SwingAttack.prototype.attack = function () {
        this.swing();
    };
    SwingAttack.prototype.swing = function () {
        console.log(this.weapon + " swing!");
    };
    return SwingAttack;
}());
var ShotAttack = /** @class */ (function () {
    function ShotAttack(weapon) {
        this.weapon = weapon;
    }
    ShotAttack.prototype.attack = function () {
        this.shot();
    };
    ShotAttack.prototype.shot = function () {
        console.log(this.weapon + " shot!");
    };
    return ShotAttack;
}());
var NoActionAttack = /** @class */ (function () {
    function NoActionAttack(weapon) {
        this.weapon = weapon;
    }
    NoActionAttack.prototype.attack = function () {
        this.shot();
    };
    NoActionAttack.prototype.shot = function () {
        console.log(this.weapon + " but nothing!");
    };
    return NoActionAttack;
}());
var Monster = /** @class */ (function () {
    function Monster(skin) {
        this.skin = skin;
    }
    Monster.prototype.setAttackable = function (attackAble) {
        this.attackAble = attackAble;
        this.weapon = this.attackAble.weapon;
    };
    Monster.prototype.activeAttack = function () {
        if (this.attackAble) {
            this.attackAble.attack();
        }
    };
    return Monster;
}());
var OrcNoArm = /** @class */ (function (_super) {
    __extends(OrcNoArm, _super);
    function OrcNoArm(s) {
        if (s === void 0) { s = 'green'; }
        var _this = _super.call(this, s) || this;
        var at = new NoActionAttack('arm');
        _this.setAttackable(at);
        return _this;
    }
    return OrcNoArm;
}(Monster));
var noArmOrc = new OrcNoArm();
noArmOrc.activeAttack();
noArmOrc.setAttackable(new ShotAttack('bow'));
noArmOrc.activeAttack();
