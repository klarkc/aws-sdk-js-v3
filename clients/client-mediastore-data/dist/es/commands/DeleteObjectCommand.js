import { __extends } from "tslib";
import { DeleteObjectRequest, DeleteObjectResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteObjectCommand, serializeAws_restJson1DeleteObjectCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DeleteObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DeleteObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new DeleteObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteObjectCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteObjectCommand = /** @class */ (function (_super) {
    __extends(DeleteObjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteObjectCommand(input) {
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
    DeleteObjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreDataClient";
        var commandName = "DeleteObjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteObjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteObjectResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteObjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteObjectCommand(input, context);
    };
    DeleteObjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteObjectCommand(output, context);
    };
    return DeleteObjectCommand;
}($Command));
export { DeleteObjectCommand };
//# sourceMappingURL=DeleteObjectCommand.js.map