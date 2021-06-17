import { __extends } from "tslib";
import { CreateAccessRequest, CreateAccessResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAccessCommand, serializeAws_json1_1CreateAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by administrators to choose which groups in the directory should have access to
 *       upload and download files over the enabled protocols using AWS Transfer Family. For example, a
 *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
 *       the ability to transfer files to the server. An administrator can use
 *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
 *       ability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new CreateAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessCommandInput} for command's `input` shape.
 * @see {@link CreateAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessCommand = /** @class */ (function (_super) {
    __extends(CreateAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccessCommand(input) {
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
    CreateAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "CreateAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccessResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAccessCommand(input, context);
    };
    CreateAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAccessCommand(output, context);
    };
    return CreateAccessCommand;
}($Command));
export { CreateAccessCommand };
//# sourceMappingURL=CreateAccessCommand.js.map