import { __extends } from "tslib";
import { CreateCacheSecurityGroupMessage, CreateCacheSecurityGroupResult } from "../models/models_0";
import { deserializeAws_queryCreateCacheSecurityGroupCommand, serializeAws_queryCreateCacheSecurityGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new cache security group. Use a
 *             cache security group to control access to one or more clusters.</p>
 *         <p>Cache security groups are only used when you are creating a cluster outside of an Amazon
 *             Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache
 *             subnet group instead. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CreateCacheSecurityGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CreateCacheSecurityGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new CreateCacheSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCacheSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCacheSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCacheSecurityGroupCommand = /** @class */ (function (_super) {
    __extends(CreateCacheSecurityGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCacheSecurityGroupCommand(input) {
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
    CreateCacheSecurityGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "CreateCacheSecurityGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCacheSecurityGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCacheSecurityGroupResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCacheSecurityGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateCacheSecurityGroupCommand(input, context);
    };
    CreateCacheSecurityGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateCacheSecurityGroupCommand(output, context);
    };
    return CreateCacheSecurityGroupCommand;
}($Command));
export { CreateCacheSecurityGroupCommand };
//# sourceMappingURL=CreateCacheSecurityGroupCommand.js.map