import { __extends } from "tslib";
import { GetBlockPublicAccessConfigurationInput, GetBlockPublicAccessConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand, serializeAws_json1_1GetBlockPublicAccessConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the Amazon EMR block public access configuration for your AWS account in the
 *          current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR Management
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBlockPublicAccessConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetBlockPublicAccessConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBlockPublicAccessConfigurationCommand(input) {
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
    GetBlockPublicAccessConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "GetBlockPublicAccessConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBlockPublicAccessConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetBlockPublicAccessConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBlockPublicAccessConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBlockPublicAccessConfigurationCommand(input, context);
    };
    GetBlockPublicAccessConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand(output, context);
    };
    return GetBlockPublicAccessConfigurationCommand;
}($Command));
export { GetBlockPublicAccessConfigurationCommand };
//# sourceMappingURL=GetBlockPublicAccessConfigurationCommand.js.map