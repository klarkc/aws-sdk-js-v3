import { __extends } from "tslib";
import { ListPolicyAttachmentsRequest, ListPolicyAttachmentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListPolicyAttachmentsCommand,
  serializeAws_restJson1ListPolicyAttachmentsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPolicyAttachmentsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListPolicyAttachmentsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListPolicyAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPolicyAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPolicyAttachmentsCommand = /** @class */ (function (_super) {
  __extends(ListPolicyAttachmentsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPolicyAttachmentsCommand(input) {
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
  ListPolicyAttachmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListPolicyAttachmentsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPolicyAttachmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyAttachmentsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPolicyAttachmentsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListPolicyAttachmentsCommand(input, context);
  };
  ListPolicyAttachmentsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListPolicyAttachmentsCommand(output, context);
  };
  return ListPolicyAttachmentsCommand;
})($Command);
export { ListPolicyAttachmentsCommand };
//# sourceMappingURL=ListPolicyAttachmentsCommand.js.map
