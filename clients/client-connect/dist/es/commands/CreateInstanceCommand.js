import { __extends } from "tslib";
import { CreateInstanceRequest, CreateInstanceResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateInstanceCommand, serializeAws_restJson1CreateInstanceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any
 *    storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not
 *    allow for any configurations on features, such as Contact Lens for Amazon Connect. </p>
 *          <p>Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days.
 * If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances.
 * You must wait 30 days before you can restart creating and deleting instances in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstanceCommand = /** @class */ (function (_super) {
    __extends(CreateInstanceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstanceCommand(input) {
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
    CreateInstanceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "CreateInstanceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstanceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstanceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateInstanceCommand(input, context);
    };
    CreateInstanceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateInstanceCommand(output, context);
    };
    return CreateInstanceCommand;
}($Command));
export { CreateInstanceCommand };
//# sourceMappingURL=CreateInstanceCommand.js.map