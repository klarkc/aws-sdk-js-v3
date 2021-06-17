import { __extends } from "tslib";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import { deserializeAws_json1_1CreateDistributionCommand, serializeAws_json1_1CreateDistributionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>A distribution is a globally distributed network of caching servers that improve the
 *       performance of your website or web application hosted on a Lightsail instance. For more
 *       information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-content-delivery-network-distributions">Content delivery networks in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDistributionCommand = /** @class */ (function (_super) {
    __extends(CreateDistributionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDistributionCommand(input) {
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
    CreateDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateDistributionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDistributionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDistributionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDistributionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDistributionCommand(input, context);
    };
    CreateDistributionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDistributionCommand(output, context);
    };
    return CreateDistributionCommand;
}($Command));
export { CreateDistributionCommand };
//# sourceMappingURL=CreateDistributionCommand.js.map