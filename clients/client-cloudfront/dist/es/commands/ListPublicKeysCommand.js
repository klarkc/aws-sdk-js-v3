import { __extends } from "tslib";
import { ListPublicKeysRequest, ListPublicKeysResult } from "../models/models_1";
import {
  deserializeAws_restXmlListPublicKeysCommand,
  serializeAws_restXmlListPublicKeysCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all public keys that have been added to CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListPublicKeysCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListPublicKeysCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPublicKeysCommand = /** @class */ (function (_super) {
  __extends(ListPublicKeysCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPublicKeysCommand(input) {
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
  ListPublicKeysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListPublicKeysCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPublicKeysRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPublicKeysResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPublicKeysCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListPublicKeysCommand(input, context);
  };
  ListPublicKeysCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListPublicKeysCommand(output, context);
  };
  return ListPublicKeysCommand;
})($Command);
export { ListPublicKeysCommand };
//# sourceMappingURL=ListPublicKeysCommand.js.map
