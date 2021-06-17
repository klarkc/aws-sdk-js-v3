import { __extends } from "tslib";
import { GetDirectoryLimitsRequest, GetDirectoryLimitsResult } from "../models/models_0";
import { deserializeAws_json1_1GetDirectoryLimitsCommand, serializeAws_json1_1GetDirectoryLimitsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains directory limit information for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, GetDirectoryLimitsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, GetDirectoryLimitsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new GetDirectoryLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDirectoryLimitsCommandInput} for command's `input` shape.
 * @see {@link GetDirectoryLimitsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDirectoryLimitsCommand = /** @class */ (function (_super) {
    __extends(GetDirectoryLimitsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDirectoryLimitsCommand(input) {
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
    GetDirectoryLimitsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "GetDirectoryLimitsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDirectoryLimitsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDirectoryLimitsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDirectoryLimitsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDirectoryLimitsCommand(input, context);
    };
    GetDirectoryLimitsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDirectoryLimitsCommand(output, context);
    };
    return GetDirectoryLimitsCommand;
}($Command));
export { GetDirectoryLimitsCommand };
//# sourceMappingURL=GetDirectoryLimitsCommand.js.map