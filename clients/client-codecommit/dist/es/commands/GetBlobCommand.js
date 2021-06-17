import { __extends } from "tslib";
import { GetBlobInput, GetBlobOutput } from "../models/models_0";
import { deserializeAws_json1_1GetBlobCommand, serializeAws_json1_1GetBlobCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the base-64 encoded content of an individual blob in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetBlobCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetBlobCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetBlobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlobCommandInput} for command's `input` shape.
 * @see {@link GetBlobCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBlobCommand = /** @class */ (function (_super) {
    __extends(GetBlobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBlobCommand(input) {
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
    GetBlobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetBlobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBlobInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetBlobOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBlobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetBlobCommand(input, context);
    };
    GetBlobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetBlobCommand(output, context);
    };
    return GetBlobCommand;
}($Command));
export { GetBlobCommand };
//# sourceMappingURL=GetBlobCommand.js.map