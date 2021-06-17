import { __extends } from "tslib";
import { CreateSubnetGroupRequest, CreateSubnetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSubnetGroupCommand, serializeAws_json1_1CreateSubnetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateSubnetGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateSubnetGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new CreateSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(CreateSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSubnetGroupCommand(input) {
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
    CreateSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "CreateSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSubnetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSubnetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSubnetGroupCommand(input, context);
    };
    CreateSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSubnetGroupCommand(output, context);
    };
    return CreateSubnetGroupCommand;
}($Command));
export { CreateSubnetGroupCommand };
//# sourceMappingURL=CreateSubnetGroupCommand.js.map