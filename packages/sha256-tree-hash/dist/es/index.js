import { __awaiter, __generator, __read } from "tslib";
var MiB = 1048576;
/**
 * A Hash that will calculate a Sha256 tree hash.
 */
var TreeHash = /** @class */ (function () {
    /**
     * Initializes a TreeHash.
     * @param Sha256 A Sha256 hash constructor.
     */
    function TreeHash(Sha256, fromUtf8) {
        this.Sha256 = Sha256;
        this.fromUtf8 = fromUtf8;
        this.collectedHashDigests = [];
    }
    /**
     * Generates Sha256 hashes from 1 MiB chunks of the
     * internal buffer.
     * Will set the internal buffer to any bytes remaining
     * that is less than 1 MiB.
     */
    TreeHash.prototype.hashBuffer = function () {
        if (!this.buffer) {
            return;
        }
        var remainingSize = this.buffer.byteLength;
        while (remainingSize >= MiB) {
            var hash = new this.Sha256();
            hash.update(this.buffer.subarray(0, MiB));
            this.collectedHashDigests.push(hash.digest());
            this.buffer = this.buffer.subarray(MiB);
            remainingSize = this.buffer.byteLength;
        }
    };
    /**
     * Updates the tree hash with byte data.
     * @param chunk Byte data to apply to the tree hash.
     */
    TreeHash.prototype.update = function (data) {
        var chunk = this.convertToBuffer(data);
        if (!this.buffer) {
            this.buffer = chunk;
        }
        else {
            // determine size of both pieces
            var totalSize = this.buffer.byteLength + chunk.byteLength;
            var tempBuffer = new Uint8Array(totalSize);
            tempBuffer.set(this.buffer);
            tempBuffer.set(chunk, this.buffer.byteLength);
            this.buffer = tempBuffer;
        }
        // hasBuffer will set this.buffer with remaining data
        this.hashBuffer();
    };
    /**
     * Calculates the digest for the tree hash.
     */
    TreeHash.prototype.digest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var collectedHashDigests, smallHash, higherLevelHashDigests, i, _a, digest1, digest2, chunk, hash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        collectedHashDigests = this.collectedHashDigests;
                        // remove the reference to collected hashes to free up space
                        this.collectedHashDigests = [];
                        // loop through collected hashes
                        if (this.buffer && this.buffer.byteLength > 0) {
                            smallHash = new this.Sha256();
                            smallHash.update(this.buffer);
                            collectedHashDigests.push(smallHash.digest());
                            // remove the remaining buffer
                            this.buffer = void 0;
                        }
                        _b.label = 1;
                    case 1:
                        if (!(collectedHashDigests.length > 1)) return [3 /*break*/, 7];
                        higherLevelHashDigests = [];
                        i = 0;
                        _b.label = 2;
                    case 2:
                        if (!(i < collectedHashDigests.length)) return [3 /*break*/, 6];
                        if (!(i + 1 < collectedHashDigests.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Promise.all([collectedHashDigests[i], collectedHashDigests[i + 1]])];
                    case 3:
                        _a = __read.apply(void 0, [_b.sent(), 2]), digest1 = _a[0], digest2 = _a[1];
                        chunk = new Uint8Array(digest1.byteLength + digest2.byteLength);
                        chunk.set(digest1);
                        chunk.set(digest2, digest1.byteLength);
                        hash = new this.Sha256();
                        hash.update(chunk);
                        higherLevelHashDigests.push(hash.digest());
                        return [3 /*break*/, 5];
                    case 4:
                        // move a lone hash up a level
                        higherLevelHashDigests.push(collectedHashDigests[i]);
                        _b.label = 5;
                    case 5:
                        i += 2;
                        return [3 /*break*/, 2];
                    case 6:
                        collectedHashDigests = higherLevelHashDigests;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/, collectedHashDigests[0]];
                }
            });
        });
    };
    /**
     * Converts source data into a Uint8Array.
     * @param data Data to convert to a Uint8Array.
     */
    TreeHash.prototype.convertToBuffer = function (data) {
        if (typeof data === "string") {
            return this.fromUtf8(data);
        }
        if (ArrayBuffer.isView(data)) {
            return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        }
        return new Uint8Array(data);
    };
    return TreeHash;
}());
export { TreeHash };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztBQUVwQjs7R0FFRztBQUNIO0lBSUU7OztPQUdHO0lBQ0gsa0JBQTZCLE1BQXVCLEVBQW1CLFFBQWlCO1FBQTNELFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQW1CLGFBQVEsR0FBUixRQUFRLENBQVM7UUFOaEYseUJBQW9CLEdBQTBCLEVBQUUsQ0FBQztJQU1rQyxDQUFDO0lBRTVGOzs7OztPQUtHO0lBQ0ssNkJBQVUsR0FBbEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMzQyxPQUFPLGFBQWEsSUFBSSxHQUFHLEVBQUU7WUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxJQUFnQjtRQUM1QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxnQ0FBZ0M7WUFDaEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUM1RCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU3QyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1NBQzFCO1FBRUQscURBQXFEO1FBQ3JELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDVSx5QkFBTSxHQUFuQjs7Ozs7O3dCQUNNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDckQsNERBQTREO3dCQUM1RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO3dCQUUvQixnQ0FBZ0M7d0JBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7NEJBQ3ZDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQzlCLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs0QkFDOUMsOEJBQThCOzRCQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO3lCQUN0Qjs7OzZCQUVNLENBQUEsb0JBQW9CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTt3QkFDOUIsc0JBQXNCLEdBQTBCLEVBQUUsQ0FBQzt3QkFDaEQsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUE7NkJBQ3pDLENBQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUEsRUFBbkMsd0JBQW1DO3dCQUVWLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBOzt3QkFBOUYsS0FBQSxzQkFBcUIsU0FBeUUsS0FBQSxFQUE3RixPQUFPLFFBQUEsRUFBRSxPQUFPLFFBQUE7d0JBRWpCLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDdEUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUVqQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzs7O3dCQUUzQyw4QkFBOEI7d0JBQzlCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7d0JBZFIsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7O3dCQWlCdkQsb0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7OzRCQUdoRCxzQkFBTyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBQzs7OztLQUNoQztJQUVEOzs7T0FHRztJQUNLLGtDQUFlLEdBQXZCLFVBQXdCLElBQWdCO1FBQ3RDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3JHO1FBRUQsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUEvR0QsSUErR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNvZGVyLCBIYXNoLCBIYXNoQ29uc3RydWN0b3IsIFNvdXJjZURhdGEgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuY29uc3QgTWlCID0gMTA0ODU3NjtcblxuLyoqXG4gKiBBIEhhc2ggdGhhdCB3aWxsIGNhbGN1bGF0ZSBhIFNoYTI1NiB0cmVlIGhhc2guXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmVlSGFzaCBpbXBsZW1lbnRzIEhhc2gge1xuICBwcml2YXRlIGJ1ZmZlcj86IFVpbnQ4QXJyYXk7XG4gIHByaXZhdGUgY29sbGVjdGVkSGFzaERpZ2VzdHM6IFByb21pc2U8VWludDhBcnJheT5bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIFRyZWVIYXNoLlxuICAgKiBAcGFyYW0gU2hhMjU2IEEgU2hhMjU2IGhhc2ggY29uc3RydWN0b3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IFNoYTI1NjogSGFzaENvbnN0cnVjdG9yLCBwcml2YXRlIHJlYWRvbmx5IGZyb21VdGY4OiBEZWNvZGVyKSB7fVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgU2hhMjU2IGhhc2hlcyBmcm9tIDEgTWlCIGNodW5rcyBvZiB0aGVcbiAgICogaW50ZXJuYWwgYnVmZmVyLlxuICAgKiBXaWxsIHNldCB0aGUgaW50ZXJuYWwgYnVmZmVyIHRvIGFueSBieXRlcyByZW1haW5pbmdcbiAgICogdGhhdCBpcyBsZXNzIHRoYW4gMSBNaUIuXG4gICAqL1xuICBwcml2YXRlIGhhc2hCdWZmZXIoKSB7XG4gICAgaWYgKCF0aGlzLmJ1ZmZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZW1haW5pbmdTaXplID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICB3aGlsZSAocmVtYWluaW5nU2l6ZSA+PSBNaUIpIHtcbiAgICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5TaGEyNTYoKTtcbiAgICAgIGhhc2gudXBkYXRlKHRoaXMuYnVmZmVyLnN1YmFycmF5KDAsIE1pQikpO1xuICAgICAgdGhpcy5jb2xsZWN0ZWRIYXNoRGlnZXN0cy5wdXNoKGhhc2guZGlnZXN0KCkpO1xuXG4gICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLnN1YmFycmF5KE1pQik7XG4gICAgICByZW1haW5pbmdTaXplID0gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdHJlZSBoYXNoIHdpdGggYnl0ZSBkYXRhLlxuICAgKiBAcGFyYW0gY2h1bmsgQnl0ZSBkYXRhIHRvIGFwcGx5IHRvIHRoZSB0cmVlIGhhc2guXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRhdGE6IFNvdXJjZURhdGEpIHtcbiAgICBjb25zdCBjaHVuayA9IHRoaXMuY29udmVydFRvQnVmZmVyKGRhdGEpO1xuICAgIGlmICghdGhpcy5idWZmZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyID0gY2h1bms7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRldGVybWluZSBzaXplIG9mIGJvdGggcGllY2VzXG4gICAgICBjb25zdCB0b3RhbFNpemUgPSB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoICsgY2h1bmsuYnl0ZUxlbmd0aDtcbiAgICAgIGNvbnN0IHRlbXBCdWZmZXIgPSBuZXcgVWludDhBcnJheSh0b3RhbFNpemUpO1xuXG4gICAgICB0ZW1wQnVmZmVyLnNldCh0aGlzLmJ1ZmZlcik7XG4gICAgICB0ZW1wQnVmZmVyLnNldChjaHVuaywgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgICB0aGlzLmJ1ZmZlciA9IHRlbXBCdWZmZXI7XG4gICAgfVxuXG4gICAgLy8gaGFzQnVmZmVyIHdpbGwgc2V0IHRoaXMuYnVmZmVyIHdpdGggcmVtYWluaW5nIGRhdGFcbiAgICB0aGlzLmhhc2hCdWZmZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBkaWdlc3QgZm9yIHRoZSB0cmVlIGhhc2guXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGlnZXN0KCk6IFByb21pc2U8VWludDhBcnJheT4ge1xuICAgIGxldCBjb2xsZWN0ZWRIYXNoRGlnZXN0cyA9IHRoaXMuY29sbGVjdGVkSGFzaERpZ2VzdHM7XG4gICAgLy8gcmVtb3ZlIHRoZSByZWZlcmVuY2UgdG8gY29sbGVjdGVkIGhhc2hlcyB0byBmcmVlIHVwIHNwYWNlXG4gICAgdGhpcy5jb2xsZWN0ZWRIYXNoRGlnZXN0cyA9IFtdO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGNvbGxlY3RlZCBoYXNoZXNcbiAgICBpZiAodGhpcy5idWZmZXIgJiYgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNtYWxsSGFzaCA9IG5ldyB0aGlzLlNoYTI1NigpO1xuICAgICAgc21hbGxIYXNoLnVwZGF0ZSh0aGlzLmJ1ZmZlcik7XG4gICAgICBjb2xsZWN0ZWRIYXNoRGlnZXN0cy5wdXNoKHNtYWxsSGFzaC5kaWdlc3QoKSk7XG4gICAgICAvLyByZW1vdmUgdGhlIHJlbWFpbmluZyBidWZmZXJcbiAgICAgIHRoaXMuYnVmZmVyID0gdm9pZCAwO1xuICAgIH1cblxuICAgIHdoaWxlIChjb2xsZWN0ZWRIYXNoRGlnZXN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBoaWdoZXJMZXZlbEhhc2hEaWdlc3RzOiBQcm9taXNlPFVpbnQ4QXJyYXk+W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGVjdGVkSGFzaERpZ2VzdHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgaWYgKGkgKyAxIDwgY29sbGVjdGVkSGFzaERpZ2VzdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gY29uY2F0ZW5hdGUgdGhlIHBhaXIgb2YgaGFzaGVzXG4gICAgICAgICAgY29uc3QgW2RpZ2VzdDEsIGRpZ2VzdDJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2NvbGxlY3RlZEhhc2hEaWdlc3RzW2ldLCBjb2xsZWN0ZWRIYXNoRGlnZXN0c1tpICsgMV1dKTtcblxuICAgICAgICAgIGNvbnN0IGNodW5rID0gbmV3IFVpbnQ4QXJyYXkoZGlnZXN0MS5ieXRlTGVuZ3RoICsgZGlnZXN0Mi5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICBjaHVuay5zZXQoZGlnZXN0MSk7XG4gICAgICAgICAgY2h1bmsuc2V0KGRpZ2VzdDIsIGRpZ2VzdDEuYnl0ZUxlbmd0aCk7XG5cbiAgICAgICAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuU2hhMjU2KCk7XG4gICAgICAgICAgaGFzaC51cGRhdGUoY2h1bmspO1xuICAgICAgICAgIGhpZ2hlckxldmVsSGFzaERpZ2VzdHMucHVzaChoYXNoLmRpZ2VzdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtb3ZlIGEgbG9uZSBoYXNoIHVwIGEgbGV2ZWxcbiAgICAgICAgICBoaWdoZXJMZXZlbEhhc2hEaWdlc3RzLnB1c2goY29sbGVjdGVkSGFzaERpZ2VzdHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb2xsZWN0ZWRIYXNoRGlnZXN0cyA9IGhpZ2hlckxldmVsSGFzaERpZ2VzdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3RlZEhhc2hEaWdlc3RzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHNvdXJjZSBkYXRhIGludG8gYSBVaW50OEFycmF5LlxuICAgKiBAcGFyYW0gZGF0YSBEYXRhIHRvIGNvbnZlcnQgdG8gYSBVaW50OEFycmF5LlxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0VG9CdWZmZXIoZGF0YTogU291cmNlRGF0YSk6IFVpbnQ4QXJyYXkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgfVxufVxuIl19