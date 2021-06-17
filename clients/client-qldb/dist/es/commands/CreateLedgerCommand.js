import { __extends } from "tslib";
import { CreateLedgerRequest, CreateLedgerResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateLedgerCommand, serializeAws_restJson1CreateLedgerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new ledger in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CreateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CreateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new CreateLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLedgerCommandInput} for command's `input` shape.
 * @see {@link CreateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLedgerCommand = /** @class */ (function (_super) {
    __extends(CreateLedgerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLedgerCommand(input) {
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
    CreateLedgerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QLDBClient";
        var commandName = "CreateLedgerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLedgerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLedgerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLedgerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateLedgerCommand(input, context);
    };
    CreateLedgerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateLedgerCommand(output, context);
    };
    return CreateLedgerCommand;
}($Command));
export { CreateLedgerCommand };
//# sourceMappingURL=CreateLedgerCommand.js.map