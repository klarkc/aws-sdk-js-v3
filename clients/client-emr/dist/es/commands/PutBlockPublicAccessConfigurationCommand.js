import { __extends } from "tslib";
import { PutBlockPublicAccessConfigurationInput, PutBlockPublicAccessConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand, serializeAws_json1_1PutBlockPublicAccessConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an Amazon EMR block public access configuration for your AWS account
 *          in the current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR Management
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new PutBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutBlockPublicAccessConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutBlockPublicAccessConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutBlockPublicAccessConfigurationCommand(input) {
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
    PutBlockPublicAccessConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "PutBlockPublicAccessConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutBlockPublicAccessConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutBlockPublicAccessConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutBlockPublicAccessConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutBlockPublicAccessConfigurationCommand(input, context);
    };
    PutBlockPublicAccessConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutBlockPublicAccessConfigurationCommand(output, context);
    };
    return PutBlockPublicAccessConfigurationCommand;
}($Command));
export { PutBlockPublicAccessConfigurationCommand };
//# sourceMappingURL=PutBlockPublicAccessConfigurationCommand.js.map