import { __extends } from "tslib";
import { PutObjectRequest, PutObjectResponse } from "../models/models_0";
import { deserializeAws_restJson1PutObjectCommand, serializeAws_restJson1PutObjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, PutObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, PutObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutObjectCommand = /** @class */ (function (_super) {
    __extends(PutObjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutObjectCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    PutObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreDataClient";
        var commandName = "PutObjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutObjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutObjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutObjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutObjectCommand(input, context);
    };
    PutObjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutObjectCommand(output, context);
    };
    return PutObjectCommand;
}($Command));
export { PutObjectCommand };
//# sourceMappingURL=PutObjectCommand.js.map