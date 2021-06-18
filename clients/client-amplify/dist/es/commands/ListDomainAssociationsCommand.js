import { __extends } from "tslib";
import { ListDomainAssociationsRequest, ListDomainAssociationsResult } from "../models/models_0";
import {
  deserializeAws_restJson1ListDomainAssociationsCommand,
  serializeAws_restJson1ListDomainAssociationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns the domain associations for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListDomainAssociationsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListDomainAssociationsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new ListDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainAssociationsCommand = /** @class */ (function (_super) {
  __extends(ListDomainAssociationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDomainAssociationsCommand(input) {
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
  ListDomainAssociationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "ListDomainAssociationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDomainAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDomainAssociationsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDomainAssociationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListDomainAssociationsCommand(input, context);
  };
  ListDomainAssociationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListDomainAssociationsCommand(output, context);
  };
  return ListDomainAssociationsCommand;
})($Command);
export { ListDomainAssociationsCommand };
//# sourceMappingURL=ListDomainAssociationsCommand.js.map
