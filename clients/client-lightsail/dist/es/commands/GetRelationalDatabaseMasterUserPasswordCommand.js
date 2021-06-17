import { __extends } from "tslib";
import { GetRelationalDatabaseMasterUserPasswordRequest, GetRelationalDatabaseMasterUserPasswordResult, } from "../models/models_1";
import { deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand, serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current, previous, or pending versions of the master user password for a
 *       Lightsail database.</p>
 *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
 *       access control via resource tags applied to the resource identified by
 *       relationalDatabaseName.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseMasterUserPasswordCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseMasterUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseMasterUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRelationalDatabaseMasterUserPasswordCommand = /** @class */ (function (_super) {
    __extends(GetRelationalDatabaseMasterUserPasswordCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRelationalDatabaseMasterUserPasswordCommand(input) {
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
    GetRelationalDatabaseMasterUserPasswordCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetRelationalDatabaseMasterUserPasswordCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRelationalDatabaseMasterUserPasswordRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRelationalDatabaseMasterUserPasswordResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRelationalDatabaseMasterUserPasswordCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(input, context);
    };
    GetRelationalDatabaseMasterUserPasswordCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(output, context);
    };
    return GetRelationalDatabaseMasterUserPasswordCommand;
}($Command));
export { GetRelationalDatabaseMasterUserPasswordCommand };
//# sourceMappingURL=GetRelationalDatabaseMasterUserPasswordCommand.js.map