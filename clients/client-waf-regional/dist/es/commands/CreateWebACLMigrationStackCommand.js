import { __extends } from "tslib";
import { CreateWebACLMigrationStackRequest, CreateWebACLMigrationStackResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateWebACLMigrationStackCommand, serializeAws_json1_1CreateWebACLMigrationStackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an AWS CloudFormation WAFV2 template for the specified web ACL in the specified Amazon S3 bucket.
 *            Then, in CloudFormation, you create a stack from the template, to create the web ACL and its resources in AWS WAFV2.
 *            Use this to migrate your AWS WAF Classic web ACL to the latest version of AWS WAF.</p>
 *          <p>This is part of a larger migration procedure for web ACLs from AWS WAF Classic to the latest version of AWS WAF.
 *            For the full procedure, including caveats and manual steps to complete
 *            the migration and switch over to the new web ACL, see
 *            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-migrating-from-classic.html">Migrating your AWS WAF Classic resources to AWS WAF</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF
 *   Developer Guide</a>.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, CreateWebACLMigrationStackCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, CreateWebACLMigrationStackCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new CreateWebACLMigrationStackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebACLMigrationStackCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLMigrationStackCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWebACLMigrationStackCommand = /** @class */ (function (_super) {
    __extends(CreateWebACLMigrationStackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWebACLMigrationStackCommand(input) {
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
    CreateWebACLMigrationStackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "CreateWebACLMigrationStackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWebACLMigrationStackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWebACLMigrationStackResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWebACLMigrationStackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWebACLMigrationStackCommand(input, context);
    };
    CreateWebACLMigrationStackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWebACLMigrationStackCommand(output, context);
    };
    return CreateWebACLMigrationStackCommand;
}($Command));
export { CreateWebACLMigrationStackCommand };
//# sourceMappingURL=CreateWebACLMigrationStackCommand.js.map