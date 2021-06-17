import { __extends } from "tslib";
import { GetWorkingLocationRequest, GetWorkingLocationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetWorkingLocationCommand, serializeAws_restJson1GetWorkingLocationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A temporary Amazon S3 location to copy your files from a source location to stage or use
 *       as a scratch space in Habanero notebook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetWorkingLocationCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetWorkingLocationCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetWorkingLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkingLocationCommandInput} for command's `input` shape.
 * @see {@link GetWorkingLocationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkingLocationCommand = /** @class */ (function (_super) {
    __extends(GetWorkingLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorkingLocationCommand(input) {
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
    GetWorkingLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceDataClient";
        var commandName = "GetWorkingLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorkingLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorkingLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorkingLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetWorkingLocationCommand(input, context);
    };
    GetWorkingLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetWorkingLocationCommand(output, context);
    };
    return GetWorkingLocationCommand;
}($Command));
export { GetWorkingLocationCommand };
//# sourceMappingURL=GetWorkingLocationCommand.js.map