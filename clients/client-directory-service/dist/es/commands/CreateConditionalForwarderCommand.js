import { __extends } from "tslib";
import { CreateConditionalForwarderRequest, CreateConditionalForwarderResult } from "../models/models_0";
import { deserializeAws_json1_1CreateConditionalForwarderCommand, serializeAws_json1_1CreateConditionalForwarderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link CreateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConditionalForwarderCommand = /** @class */ (function (_super) {
    __extends(CreateConditionalForwarderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConditionalForwarderCommand(input) {
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
    CreateConditionalForwarderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "CreateConditionalForwarderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConditionalForwarderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConditionalForwarderResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConditionalForwarderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateConditionalForwarderCommand(input, context);
    };
    CreateConditionalForwarderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateConditionalForwarderCommand(output, context);
    };
    return CreateConditionalForwarderCommand;
}($Command));
export { CreateConditionalForwarderCommand };
//# sourceMappingURL=CreateConditionalForwarderCommand.js.map