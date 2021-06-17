import { __extends } from "tslib";
import { CreateChangesetRequest, CreateChangesetResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateChangesetCommand, serializeAws_restJson1CreateChangesetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new changeset in a FinSpace dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreateChangesetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreateChangesetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new CreateChangesetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateChangesetCommandInput} for command's `input` shape.
 * @see {@link CreateChangesetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateChangesetCommand = /** @class */ (function (_super) {
    __extends(CreateChangesetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateChangesetCommand(input) {
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
    CreateChangesetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceDataClient";
        var commandName = "CreateChangesetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateChangesetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateChangesetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateChangesetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateChangesetCommand(input, context);
    };
    CreateChangesetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateChangesetCommand(output, context);
    };
    return CreateChangesetCommand;
}($Command));
export { CreateChangesetCommand };
//# sourceMappingURL=CreateChangesetCommand.js.map