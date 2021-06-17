import { __extends } from "tslib";
import { GetSnapshotBlockRequest, GetSnapshotBlockResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSnapshotBlockCommand, serializeAws_restJson1GetSnapshotBlockCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, GetSnapshotBlockCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, GetSnapshotBlockCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new GetSnapshotBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSnapshotBlockCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSnapshotBlockCommand = /** @class */ (function (_super) {
    __extends(GetSnapshotBlockCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSnapshotBlockCommand(input) {
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
    GetSnapshotBlockCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "GetSnapshotBlockCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSnapshotBlockRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSnapshotBlockResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSnapshotBlockCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSnapshotBlockCommand(input, context);
    };
    GetSnapshotBlockCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSnapshotBlockCommand(output, context);
    };
    return GetSnapshotBlockCommand;
}($Command));
export { GetSnapshotBlockCommand };
//# sourceMappingURL=GetSnapshotBlockCommand.js.map