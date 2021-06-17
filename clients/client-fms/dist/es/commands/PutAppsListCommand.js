import { __extends } from "tslib";
import { PutAppsListRequest, PutAppsListResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAppsListCommand, serializeAws_json1_1PutAppsListCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS Firewall Manager applications list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutAppsListCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutAppsListCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutAppsListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppsListCommandInput} for command's `input` shape.
 * @see {@link PutAppsListCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAppsListCommand = /** @class */ (function (_super) {
    __extends(PutAppsListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAppsListCommand(input) {
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
    PutAppsListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "PutAppsListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAppsListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAppsListResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAppsListCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAppsListCommand(input, context);
    };
    PutAppsListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAppsListCommand(output, context);
    };
    return PutAppsListCommand;
}($Command));
export { PutAppsListCommand };
//# sourceMappingURL=PutAppsListCommand.js.map