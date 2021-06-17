import { __extends } from "tslib";
import { CreateCloudFormationStackRequest, CreateCloudFormationStackResult } from "../models/models_0";
import { deserializeAws_json1_1CreateCloudFormationStackCommand, serializeAws_json1_1CreateCloudFormationStackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
 *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
 *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
 *         records</code> operation to get a list of the CloudFormation stacks created.</p>
 *          <important>
 *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
 *           cloud formation stack</code> operation again with the same export snapshot record.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateCloudFormationStackCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateCloudFormationStackCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateCloudFormationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCloudFormationStackCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationStackCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCloudFormationStackCommand = /** @class */ (function (_super) {
    __extends(CreateCloudFormationStackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCloudFormationStackCommand(input) {
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
    CreateCloudFormationStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "CreateCloudFormationStackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCloudFormationStackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCloudFormationStackResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCloudFormationStackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCloudFormationStackCommand(input, context);
    };
    CreateCloudFormationStackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCloudFormationStackCommand(output, context);
    };
    return CreateCloudFormationStackCommand;
}($Command));
export { CreateCloudFormationStackCommand };
//# sourceMappingURL=CreateCloudFormationStackCommand.js.map