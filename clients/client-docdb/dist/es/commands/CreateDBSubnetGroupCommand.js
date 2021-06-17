import { __extends } from "tslib";
import { CreateDBSubnetGroupMessage, CreateDBSubnetGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateDBSubnetGroupCommand, serializeAws_queryCreateDBSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new subnet group. subnet groups must contain at least one subnet in at
 *             least two Availability Zones in the AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBSubnetGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBSubnetGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDBSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBSubnetGroupCommand(input) {
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
    CreateDBSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "CreateDBSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBSubnetGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBSubnetGroupCommand(input, context);
    };
    CreateDBSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBSubnetGroupCommand(output, context);
    };
    return CreateDBSubnetGroupCommand;
}($Command));
export { CreateDBSubnetGroupCommand };
//# sourceMappingURL=CreateDBSubnetGroupCommand.js.map