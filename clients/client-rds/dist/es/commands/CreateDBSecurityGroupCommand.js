import { __extends } from "tslib";
import { CreateDBSecurityGroupMessage, CreateDBSecurityGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateDBSecurityGroupCommand, serializeAws_queryCreateDBSecurityGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DB security group. DB security groups control access to a DB instance.</p>
 *          <note>
 *             <p>A DB security group controls access to EC2-Classic DB instances that are not in a VPC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSecurityGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSecurityGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(CreateDBSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBSecurityGroupCommand(input) {
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
    CreateDBSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBSecurityGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBSecurityGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBSecurityGroupCommand(input, context);
    };
    CreateDBSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBSecurityGroupCommand(output, context);
    };
    return CreateDBSecurityGroupCommand;
}($Command));
export { CreateDBSecurityGroupCommand };
//# sourceMappingURL=CreateDBSecurityGroupCommand.js.map