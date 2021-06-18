import { __extends } from "tslib";
import { ListDistributionsByWebACLIdRequest, ListDistributionsByWebACLIdResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByWebACLIdCommand,
  serializeAws_restXmlListDistributionsByWebACLIdCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the distributions that are associated with a specified AWS WAF web ACL. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByWebACLIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByWebACLIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByWebACLIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByWebACLIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByWebACLIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributionsByWebACLIdCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsByWebACLIdCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsByWebACLIdCommand(input) {
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
  ListDistributionsByWebACLIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsByWebACLIdCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsByWebACLIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByWebACLIdResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsByWebACLIdCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsByWebACLIdCommand(input, context);
  };
  ListDistributionsByWebACLIdCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsByWebACLIdCommand(output, context);
  };
  return ListDistributionsByWebACLIdCommand;
})($Command);
export { ListDistributionsByWebACLIdCommand };
//# sourceMappingURL=ListDistributionsByWebACLIdCommand.js.map
