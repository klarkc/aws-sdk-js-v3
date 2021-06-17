import { __extends } from "tslib";
import { GetCloudFormationStackRecordsRequest, GetCloudFormationStackRecordsResult } from "../models/models_0";
import { deserializeAws_json1_1GetCloudFormationStackRecordsCommand, serializeAws_json1_1GetCloudFormationStackRecordsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
 *         formation stack</code> operation.</p>
 *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
 *       snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCloudFormationStackRecordsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCloudFormationStackRecordsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetCloudFormationStackRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCloudFormationStackRecordsCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationStackRecordsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCloudFormationStackRecordsCommand = /** @class */ (function (_super) {
    __extends(GetCloudFormationStackRecordsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCloudFormationStackRecordsCommand(input) {
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
    GetCloudFormationStackRecordsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetCloudFormationStackRecordsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCloudFormationStackRecordsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCloudFormationStackRecordsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCloudFormationStackRecordsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetCloudFormationStackRecordsCommand(input, context);
    };
    GetCloudFormationStackRecordsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetCloudFormationStackRecordsCommand(output, context);
    };
    return GetCloudFormationStackRecordsCommand;
}($Command));
export { GetCloudFormationStackRecordsCommand };
//# sourceMappingURL=GetCloudFormationStackRecordsCommand.js.map