import { __extends } from "tslib";
import { CreateLabelsRequest, CreateLabelsResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLabelsCommand, serializeAws_restJson1CreateLabelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified list of labels to the given resource (a document or
 *             folder)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLabelsCommandInput} for command's `input` shape.
 * @see {@link CreateLabelsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLabelsCommand = /** @class */ (function (_super) {
    __extends(CreateLabelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLabelsCommand(input) {
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
    CreateLabelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "CreateLabelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLabelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLabelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLabelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLabelsCommand(input, context);
    };
    CreateLabelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLabelsCommand(output, context);
    };
    return CreateLabelsCommand;
}($Command));
export { CreateLabelsCommand };
//# sourceMappingURL=CreateLabelsCommand.js.map